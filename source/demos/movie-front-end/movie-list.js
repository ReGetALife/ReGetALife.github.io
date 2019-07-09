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

//渲染列表
function showList(pageNum) {
    var searchKey = getUrlPrams()['key'] == undefined ? '' : getUrlPrams()['key'];
    $.ajax('https://movie-back-end.solidays.now.sh/movies?key=' + searchKey + '&page=' + pageNum, {
        dataType: 'json'
    }).done(function (data) {
        $('#list').empty();
        for (var i = 0; i < data.result.length; i++) {
            $('#list').append("<item v-bind:item='" + JSON.stringify(data.result[i]).replace(/'/g, "&apos;") + "'></item>")
        }
        new Vue({ el: '#list' });
    }).fail(function (xhr, status) {
        console.log('失败: ' + xhr.status + ', 原因: ' + status);
    });
}
//把hex颜色转化为rgba
function colorConvert(color, transparency) {
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    return "rgba(" + r + "," + g + "," + b + "," + transparency + ")";
}
//统计和可视化
function statistic() {
    $("#main").append(`
    <div id="statistic">
        <h2>影片统计</h2>
        <canvas id="myChart" height="1100px"></canvas>
    </div>
    `)
    //进行统计
    $.ajax('https://movie-back-end.solidays.now.sh/statistics', {
        dataType: 'json'
    }).done(function (data) {
        data.sort(function(x,y){return y.value - x.value});
        //自动调色
        var seq = palette('mpn65', data.length);
        new Chart('myChart', {
            type: 'horizontalBar',
            data: {
                labels: data.map(function (e) { return e._id }),
                datasets: [{
                    label: '数量',
                    data: data.map(function (e) { return e.value }),
                    backgroundColor: seq.map(function (e) { return colorConvert(e, 0.5) }),
                    borderColor: seq.map(function (e) { return "#" + e }),
                    borderWidth: 1
                }]
            },
        });
    }).fail(function (xhr, status) {
        console.log('失败: ' + xhr.status + ', 原因: ' + status);
    });

}
$(document).ready(function () {
    statistic();
    showList(1);
    var searchKey = getUrlPrams()['key'] == undefined ? '' : getUrlPrams()['key'];
    $.ajax('https://movie-back-end.solidays.now.sh/movies?key=' + searchKey, {  //初始化分页
        dataType: 'json'
    }).done(function (data) {
        //分页组件
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage;
            laypage.render({
                elem: 'page',
                count: data.len,
                layout: ['count', 'prev', 'page', 'next', 'refresh', 'skip'],
                theme: '#1E9FFF',
                jump: function (obj) {
                    //console.log(obj);
                    showList(obj.curr);
                }
            });
        });
    }).fail(function (xhr, status) {
        console.log('失败: ' + xhr.status + ', 原因: ' + status);
    });
});