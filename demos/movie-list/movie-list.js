Vue.component('item', {
    props: ['item'],
    data: function () {
        return {
            //显示默认图片
            showDefaultImage: function (event) {
                event.target.src = "./defult-image.png";
            }
        }
    },
    template: `
    <tr class="item">
            <td width="85px">
                <a :href="'./movie-detail.html?id='+item._id">
                    <img :src="item.poster" width="75px" @error="showDefaultImage">
                </a>
            </td>
            <td>
                <a :href="'./movie-detail.html?id='+item._id">{{item.title}}</a>
                </br></br>
                <p>
                    <template v-if="item.pubdate[0]">{{item.pubdate[0]}}</template>
                    <template  v-if="item.genres">
                        <template v-if="item.pubdate[0]"> / </template>
                        {{item.genres.join(" / ")}}
                    </template>
                </p>
                <p>
                    <template v-if="item.directors[0]">{{""+item.directors.map(function(e){return e.name}).join(" / ")}}</template>
                    <template v-if="item.casts">
                        <template v-if="item.directors[0]"> / </template>
                        {{item.casts.map(function(e){return e.name}).join(" / ")}}
                    </template>
                </p>
                <div v-if="item.rating.average">
                    </br>
                    <span class="rate">{{item.rating.average}}</span>
                    <span>({{item.rating.rating_people}}人评价)</span>
                </div>
            </td>
        </tr>
    `
})
//获取url中的参数
function getUrlPrams() {
    var prams = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
        function (m, key, value) {
            prams[key] = value;
        }
    );
    return prams;
}
//跳转到搜索页面搜索
function startSearch() {
    if (document.getElementById("myInput").value) {
        var dest = '?key=' + document.getElementById("myInput").value;
        window.open(dest)
    }
    return false;
}
//过滤搜索结果
function filmsFilter(films) {
    var searchKey = getUrlPrams()['key'];
    if (searchKey) {//带关键词
        films = films.filter(function (f) {
            //console.log(JSON.parse(f).title.toUpperCase().indexOf(searchKey))
            return (JSON.parse(f).title.toUpperCase().indexOf(decodeURI(searchKey).toUpperCase()) > -1 ||
                JSON.parse(f).imdb.toUpperCase().indexOf(decodeURI(searchKey).toUpperCase()) > -1 ||
                JSON.parse(f).genres.indexOf(decodeURI(searchKey)) > -1);
        })
    }
    return films;
}
//渲染列表
function showList(films, pageNum) {
    $('#list').empty();
    for (var i = (pageNum - 1) * 10; i < pageNum * 10 && i < films.length; i++) {
        $('#list').append("<item v-bind:item='" + films[i].replace(/'/g, "&apos;") + "'></item>")
    }
    new Vue({ el: '#list' });
}
//把hex颜色转化为rgba
function colorConvert(color, transparency) {
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    return "rgba(" + r + "," + g + "," + b + "," + transparency + ")";
}
//统计和可视化
function statistic(films) {
    $("body").append(`
    <div id="statistic">
        <h2>影片统计</h2>
        <canvas id="myChart" height="800px"></canvas>
    </div>
    `)
    //进行统计
    var statisticData = new Map();
    statisticData.set('全部', films.length);
    films.forEach(element => {
        var obj = JSON.parse(element);
        obj.genres.forEach(e => {
            if (statisticData.get(e)) {
                statisticData.set(e, statisticData.get(e) + 1);
            }
            else {
                statisticData.set(e, 1);
            }
        })
    });
    //console.log(statisticData)
    //自动调色
    var seq = palette('mpn65', statisticData.size);
    //console.log(seq)
    new Chart('myChart', {
        type: 'horizontalBar',
        data: {
            labels: [...statisticData].map(function (e) { return e[0] }),
            datasets: [{
                label: '数量',
                data: [...statisticData].map(function (e) { return e[1] }),
                backgroundColor: seq.map(function (e) { return colorConvert(e, 0.5) }),
                borderColor: seq.map(function (e) { return "#" + e }),
                borderWidth: 1
            }]
        },
    });
}
$(document).ready(function () {
    $.ajax('https://www.solidays.tk/demos/movie-list/films.json', {
        dataType: 'text'
    }).done(function (data) {
        var filmsRaw = data.trim().split('\n');
        statistic(filmsRaw);
        var films = filmsFilter(filmsRaw);
        showList(films, 1);
        //分页组件
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage;
            laypage.render({
                elem: 'page',
                count: films.length,
                theme: '#1E9FFF',
                jump: function (obj) {
                    //console.log(obj);
                    showList(films, obj.curr);
                }
            });
        });
    }).fail(function (xhr, status) {
        console.log('失败: ' + xhr.status + ', 原因: ' + status);
    });
});