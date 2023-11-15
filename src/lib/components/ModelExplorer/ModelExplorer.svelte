<script>
    import {getPercentile} from "$lib/components/ModelExplorer/percentile.js";
    import "@shoelace-style/shoelace/dist/components/input/input.js";
    import {onDestroy, onMount} from "svelte";
    import {sourceStore} from "$lib/stores/source.js";
    let unsubscribeSource;

    let img_src;
    let video_title;
    let id, id_input;

    let views, views_input, views_percentile;
    let likes, likes_input, likes_percentile;
    let duration, duration_input, duration_percentile;
    let comments, comments_input, comments_percentile;
    let subscribers, subscribers_input, subscribers_percentile;
    let upload_year, upload_year_input, upload_year_percentile;

    let stats;


    onMount(() => {
        reset();
        unsubscribeSource = sourceStore.subscribe( function ( source ) {
            if ( source == null ) {
                return;
            }
            stats = source.data.stats;
            reset();
        });

        views.addEventListener("sl-input", function(event){
            if (stats == null) return;
            if (event.target.value == "") {
                views_input = null;
                views_percentile = stats.data.views.median;
                return
            }
            if (event.target.value <= -1) return;
            views_input = event.target.value;
            views_percentile = getPercentile(stats.quantiles.views, views_input);
        });
        likes.addEventListener("sl-input", function(event){
            if (stats == null) return;
            if (event.target.value == "") {
                likes_input = null;
                likes_percentile = stats.data.likes.median;
                return
            }
            if (event.target.value <= -1) return;
            likes_input = event.target.value;
            likes_percentile = getPercentile(stats.quantiles.likes, likes_input);
        });
        duration.addEventListener("sl-input", function(event){
            if (stats == null) return;
            if (event.target.value == "") {
                duration_input = null;
                duration_percentile = stats.data.duration.median;
                return
            }
            if (event.target.value <= -1) return;
            duration_input = event.target.value;
            duration_percentile = getPercentile(stats.quantiles.duration, duration_input);
        });
        comments.addEventListener("sl-input", function(event){
            if (stats == null) return;
            if (event.target.value == "") {
                comments_input = null;
                comments_percentile = stats.data.comments.median;
                return
            }
            if (event.target.value <= -1) return;
            comments_input = event.target.value;
            comments_percentile = getPercentile(stats.quantiles.comments, comments_input);
        });
        subscribers.addEventListener("sl-input", function(event){
            if (stats == null) return;
            if (event.target.value == "") {
                subscribers_input = null;
                subscribers_percentile = stats.data.subscribers.median;
                return
            }
            if (event.target.value <= -1) return;
            subscribers_input = event.target.value;
            subscribers_percentile = getPercentile(stats.quantiles.subscribers, subscribers_input);
        });
        upload_year.addEventListener("sl-input", function(event){
            if (stats == null) return;
            if (event.target.value == "") {
                upload_year_input = null;
                upload_year_percentile = stats.data.upload_year.median;
                return
            }
            if (event.target.value < 2005) return;
            upload_year_input = event.target.value;
            upload_year_percentile = getPercentile(stats.quantiles.upload_year, upload_year_input);
        });

        // let videoId;
        // async function doPost(id){
        //     console.log(id);
        //     const res = await fetch ('http://127.0.0.1:5000/metadata', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type':'application/json',
        //         },
        //         mode: 'cors',
        //         body: JSON.stringify({
        //             id: id
        //         }),
        //         redirect: "follow"
        //     });
        //     const json = await res.json();
        //     console.log(json);
        //     return json;
        // }
        //
        // function isURL (string) {
        //     let url;
        //     try {
        //         url = new URL(string);
        //
        //     }
        //     catch(_){
        //         return false;
        //     }
        //     return url.protocol === "http:" || url.protocol === "https:";
        // }

        // id.addEventListener("sl-input", function(event){
        //     reset_values();
        // });
        //
        // id.addEventListener("sl-change", async function(event){
        //     id_input = event.target.value;
        //     if (stats == null) return;
        //     id_input = id_input.trim()
        //     if ( id_input.length < 11 ) return;
        //
        //     if ( isURL(id_input) ){
        //         id_input = id_input.split('watch?v=')[1].slice(0,11)
        //     }
        //     if (id_input.length != 11) return;
        //
        //     console.log(id_input);
        //     let response = await doPost(id_input)
        //
        //     video_title = response.title;
        //     img_src = response.thumbnail;
        //
        //     views_input = response.view_count;
        //     if (views_input == null) views_input = 0;
        //     views_percentile = getPercentile(stats.quantiles.views, views_input);
        //
        //     likes_input = response.like_count;
        //     if (response.like_count == null) likes_input = 0;
        //     likes_percentile = getPercentile(stats.quantiles.likes, likes_input);
        //
        //     duration_input = response.duration;
        //     if (duration_input == null) duration_input = 0
        //     duration_percentile = getPercentile(stats.quantiles.duration, duration_input);
        //
        //     comments_input = response.comment_count;
        //     if (response.comment_count == null) comments_input = 0;
        //     comments_percentile = getPercentile(stats.quantiles.comments, comments_input);
        //     console.log(comments_percentile);
        //
        //     subscribers_input = response.channel_follower_count;
        //     if (subscribers_input == null) subscribers_input = 0;
        //     subscribers_percentile = getPercentile(stats.quantiles.subscribers, subscribers_input);
        //
        //     upload_year_input = response.upload_year;
        //     if (upload_year_input != null) upload_year_percentile = getPercentile(stats.quantiles.upload_year, upload_year_input);
        //
        // });
        // id.addEventListener("sl-clear", function(event) {
        //     reset();
        // });
    });
    const reset = function () {
        id_input = "";
        reset_values()
    }

    const reset_values = function () {
        // img_src = "http://localhost:5173/data/default-thumbnail.jpg";
        // video_title = "...";
        views_input = null;
        likes_input = null;
        duration_input = null;
        comments_input = null;
        subscribers_input = null;
        upload_year_input = null;

        if (stats != null) {
            views_percentile = stats.data.views.median;
            likes_percentile = stats.data.likes.median;
            duration_percentile = stats.data.duration.median;
            comments_percentile = stats.data.comments.median;
            subscribers_percentile = stats.data.subscribers.median;
            upload_year_percentile = stats.data.upload_year.median;
        }
        else{
            views_percentile = null;
            likes_percentile = null;
            duration_percentile = null;
            comments_percentile = null;
            subscribers_percentile = null;
            upload_year_percentile = null;
        }
    }

    onDestroy(() => {
        unsubscribeSource();
    });
</script>

<section>
<!--    <div class="section-header">-->
<!--        <h2>Where does <h1>{video_title}</h1> rank, relative to all YouTube videos?</h2>-->
<!--    </div>-->
<!--    <div class="id-selector-wrapper">-->
<!--        <div class="thumbnail-wrapper">-->
<!--            <img src={img_src}>-->
<!--        </div>-->
<!--        <sl-input bind:this={id} value={id_input} label="YouTube URL or Video ID" placeholder="dQw4w9WgXcQ" clearable></sl-input>-->

<!--    </div>-->
<!--    <br><p>reset button</p><br>-->
    <div class="input">
        <sl-input bind:this={views} label="Views" value={views_input} type="number"></sl-input>
        <sl-input bind:this={likes} label="Likes" value={likes_input} type="number"></sl-input>
        <sl-input bind:this={duration} label="Duration (seconds)" value={duration_input} type="number"></sl-input>
        <sl-input bind:this={comments} label="Comments" value={comments_input} type="number"></sl-input>
        <sl-input bind:this={subscribers} label="Subscribers" value={subscribers_input} type="number"></sl-input>
        <sl-input bind:this={upload_year} label="Upload Year" value={upload_year_input} type="number"></sl-input>
    </div>
    <br>
    <br>
    <div class="display">
        <div class="display-field">
            <h1>{views_input != null ? views_input.toLocaleString() + " views" : "Views"}</h1>
            <p>{views_input != null ? "percentile: " + views_percentile + "%" : "median: "+views_percentile}</p>
        </div>
        <div class="display-field">
            <h1>{likes_input != null ? likes_input.toLocaleString() + " likes" : "Likes"}</h1>
            <p>{likes_input != null ? "percentile: " + likes_percentile + "%" : "median: "+likes_percentile}</p>
        </div>
        <div class="display-field">
            <h1>{duration_input != null ? duration_input.toLocaleString() + " seconds" : "Duration"}</h1>
            <p>{duration_input != null ? "percentile: " + duration_percentile + "%" : "median: "+duration_percentile+" seconds"}</p>
        </div>
        <div class="display-field">
            <h1>{comments_input != null ? comments_input.toLocaleString() + " comments" : "Comments"}</h1>
            <p>{comments_input != null ? "percentile: " + comments_percentile + "%" : "median: "+comments_percentile}</p>
        </div>
        <div class="display-field">
            <h1>{subscribers_input != null ? subscribers_input.toLocaleString() + " subscribers" : "Subscribers"}</h1>
            <p>{subscribers_input != null ? "percentile: " + subscribers_percentile + "%" : "median: "+subscribers_percentile}</p>
        </div>
        <div class="display-field">
            <h1>{upload_year_input != null ? "Uploaded in " + upload_year_input : "Upload Year"}</h1>
            <p>{upload_year_input != null ? "percentile: " + upload_year_percentile + "%" : "median: "+upload_year_percentile}</p>
        </div>
    </div>


</section>

<style>
    div.section-header{
        display:flex;
    }
    img {
        padding: 1rem;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }
    div.display{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: scroll;
    }
    div.display-field{
        flex: 1 1 50%;
        position: relative;
        padding: 1rem;
    }
</style>