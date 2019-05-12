Vue.component('detail', {
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
    <div>
    <div id="title">{{item.title}}</div>
    <table>
        <tr>
            <td width="20%"><img :src="item.poster" @error="showDefaultImage" width="90%"></td>
            <td width="60%">
                <p v-if="item.pubdate[0]">上映时间：{{item.pubdate.join(" / ")}}</p>
                <p v-if="item.genres[0]">类型：{{item.genres.join(" / ")}}</p>
                <p v-if="item.countries[0]">国家：{{item.countries.join(" / ")}}</p>
                <p v-if="item.languages[0]">语言：{{item.languages.join(" / ")}}</p>
                <p v-if="item.directors[0]">导演：{{item.directors.map(function(e){return e.name}).join(" / ")}}</p>
                <p v-if="item.writers[0]">编剧：{{item.writers.map(function(e){return e.name}).join(" / ")}}</p>
                <p v-if="item.casts[0]">主演：{{item.casts.map(function(e){return e.name}).join(" / ")}}</p>
                <p v-if="item.imdb">IMDB编号：{{item.imdb}}</p>
            </td>
            <td width="20%" v-if="item.rating.average">
                <div><br> <span class="rate">评分：{{item.rating.average}}</span> <span>({{item.rating.rating_people}}人评价)</span></div>
                <p>⭐⭐⭐⭐⭐：{{item.rating.stars[0]}}%</p>
                <p>⭐⭐⭐⭐：{{item.rating.stars[1]}}%</p>
                <p>⭐⭐⭐：{{item.rating.stars[2]}}%</p>
                <p>⭐⭐：{{item.rating.stars[3]}}%</p>
                <p>⭐：{{item.rating.stars[4]}}%</p>
            </td>
        </tr>
    </table>
    <div id="summary" v-if="item.summary">
        <h3>剧情简介：</h3>
        <p>{{item.summary}}</p>
    </div>
    </div>
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
//搜索
function startSearch() {
    if (document.getElementById("myInput").value) {
        var dest = './movie-list.html?key=' + document.getElementById("myInput").value;
        window.open(dest)
    }
    return false;
}
//显示电影信息
function showMovieDetail(item) {
    $('#content').append("<detail v-bind:item='" + item.replace(/'/g, "&apos;") + "'></detail>");
    new Vue({ el: '#content' });
}
$(document).ready(function () {
    $.ajax('http://139.199.75.41:1024/movies/'+ getUrlPrams()['id'], {
        dataType: 'json'
    }).done(function (data) {
        showMovieDetail(JSON.stringify(data[0]));
    }).fail(function (xhr, status) {
        console.log('失败: ' + xhr.status + ', 原因: ' + status);
    });
})