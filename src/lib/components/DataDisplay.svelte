<script>
    import { sourceStore } from "$lib/stores/source.js";
    import {onDestroy} from "svelte";
    import Chart from 'chart.js/auto';

    let unsubscribeSource;
    let datadisplay;
    // let canvases = [];
    // let charts = [];

    let views;
    // let canvas, chart;
    let canvas1, chart1;

    let viewsCanvas, viewsChart;
    let likesCanvas, likesChart;
    let durationCanvas, durationChart;
    let commentsCanvas, commentsChart;
    let subscribersCanvas, subscribersChart;
    let langCanvas, langChart;
    let yearCanvas, yearChart;
    let uploadsCanvas, uploadsChart;
    let sizeCanvas, sizeChart;
    let musicCanvas, musicChart;
    let liveCanvas, liveChart;
    let ageCanvas, ageChart;
    let categoryCanvas, categoryChart;

    unsubscribeSource = sourceStore.subscribe( function (source) {
        if (source != null) {
            if (viewsChart != null) {
                viewsChart.destroy();
            }
            viewsChart = new Chart(
                viewsCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.views.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.views.unit,
                                data: source.data.stats.data.views.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            }
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Views',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },

                }
            )
            if (likesChart != null) {
                likesChart.destroy()
            }
            likesChart = new Chart(
                likesCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.likes.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.likes.unit,
                                data: source.data.stats.data.likes.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            }
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Likes',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            )
            if (durationChart != null) {
                durationChart.destroy()
            }
            durationChart = new Chart(
                durationCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.duration.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.duration.unit,
                                data: source.data.stats.data.duration.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                            x:{
                                title:{
                                    display:true,
                                    text:'seconds',
                                    font:{
                                        size:"16px"
                                    }
                                }
                            }
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Duration',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (commentsChart != null) {
                commentsChart.destroy()
            }
            commentsChart = new Chart(
                commentsCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.comments.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.comments.unit,
                                data: source.data.stats.data.comments.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Comments',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (uploadsChart != null) {
                uploadsChart.destroy()
            }
            uploadsChart = new Chart(
                uploadsCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.annual_uploads.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.annual_uploads.unit,
                                data: source.data.stats.data.annual_uploads.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                title:{
                                    display:true,
                                    text:'videos uploaded',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            title:{
                                display:true,
                                text:'Yearly Video Uploads',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (sizeChart != null) {
                sizeChart.destroy()
            }
            sizeChart = new Chart(
                sizeCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.cumulative_uploads.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.cumulative_uploads.unit,
                                data: source.data.stats.data.cumulative_uploads.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                title:{
                                    display:true,
                                    text:'estimated size',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            title:{
                                display:true,
                                text:'Yearly Estimated Size of YouTube',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (subscribersChart != null) {
                subscribersChart.destroy()
            }
            subscribersChart = new Chart(
                subscribersCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.subscribers.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.subscribers.unit,
                                data: source.data.stats.data.subscribers.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Channel Subscribers',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (langChart != null) {
                langChart.destroy()
            }
            langChart = new Chart(
                langCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.whisper_lang.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.whisper_lang.unit,
                                data: source.data.stats.data.whisper_lang.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Detectable Language',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (musicChart != null) {
                musicChart.destroy()
            }
            musicChart = new Chart(
                musicCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.music.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.music.unit,
                                data: source.data.stats.data.music.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Accessible in YouTube Music',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (categoryChart != null) {
                categoryChart.destroy()
            }
            categoryChart = new Chart(
                categoryCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.category.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.category.unit,
                                data: source.data.stats.data.category.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Category',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (liveChart != null) {
                liveChart.destroy()
            }
            liveChart = new Chart(
                liveCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.live_status.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.live_status.unit,
                                data: source.data.stats.data.live_status.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Live Streaming Status',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
            if (ageChart != null) {
                ageChart.destroy()
            }
            ageChart = new Chart(
                ageCanvas,{
                    type: 'bar',
                    data: {
                        labels: source.data.stats.data.age_limit.labels,
                        datasets: [
                            {
                                label: source.data.stats.data.age_limit.unit,
                                data: source.data.stats.data.age_limit.values,
                                backgroundColor:'#eb6d9d'
                            },
                        ]
                    },
                    options:{
                        responsive: true,
                        scales:{
                            y:{
                                ticks:{
                                    callback: function(value, index, ticks) {
                                        return (value*100).toFixed(0) + "%"
                                    },
                                    format:{
                                        style:'percent'
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'relative frequency',
                                    font:{
                                        size:"16px",
                                    }
                                }
                            },
                        },
                        interaction:{
                            intersect: false,
                            mode:'index'
                        },
                        plugins:{
                            legend:{
                                display:false
                            },
                            tooltip:{
                                callbacks:{
                                    label: function(context) {
                                        return ((context.parsed.y * 100).toFixed(3)) + '%'
                                    }
                                }
                            },
                            title:{
                                display:true,
                                text:'Minimum Viewer Age',
                                font:{
                                    size:'16px'
                                }
                            }
                        }
                    },
                }
            );
        }
    });
    onDestroy(() => {
        unsubscribeSource();
    });

</script>

<!--{#each {length: charts.length} as _, i}-->
<!--    <p>{i}</p>-->
<!--&lt;!&ndash;    <div style="width: 800px;"><canvas bind:this={canvases[i]}></canvas></div>&ndash;&gt;-->
<!--{/each}-->

<div class="charts-wrapper">
    <div class="row">
        <div class="column">
            <div><canvas bind:this={uploadsCanvas}></canvas></div>
        </div>
        <div class="column">
            <div><canvas bind:this={sizeCanvas}></canvas></div>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <div><canvas bind:this={viewsCanvas}></canvas></div>
        </div>
        <div class="column">
            <div><canvas bind:this={likesCanvas}></canvas></div>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <div><canvas bind:this={durationCanvas}></canvas></div>
        </div>
        <div class="column">
            <div><canvas bind:this={commentsCanvas}></canvas></div>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <div><canvas bind:this={subscribersCanvas}></canvas></div>
        </div>
        <div class="column">
            <div><canvas bind:this={langCanvas}></canvas></div>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <div><canvas bind:this={musicCanvas}></canvas></div>
        </div>
        <div class="column">
            <div><canvas bind:this={categoryCanvas}></canvas></div>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <div><canvas bind:this={liveCanvas}></canvas></div>
        </div>
        <div class="column">
            <div><canvas bind:this={ageCanvas}></canvas></div>
        </div>
    </div>
</div>


<!--<div style="width: calc( (100vh - 8rem)/4*3); height: calc( (100vh - 8rem)/2)"><canvas bind:this={canvas1}></canvas></div>-->
<!--<div style="width: calc( (100vh - 8rem)/4*3); height: calc( (100vh - 8rem)/2)"><canvas bind:this={canvas2}></canvas></div>-->
<!--<div style="width: calc( (100vh - 8rem)/4*3); height: calc( (100vh - 8rem)/2)"><canvas bind:this={canvas3}></canvas></div>-->
<!--<div style="width: calc( (100vh - 8rem)/4*3); height: calc( (100vh - 8rem)/2)"><canvas bind:this={canvas4}></canvas></div>-->

<!--<pre>{datadisplay ? JSON.stringify(datadisplay, null, 2)  : '[waiting for collection data...]'}</pre>-->

<style>
    .charts-wrapper {
        overflow-y: scroll;
    }
    .row {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        width:100%;
    }
    .column {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
    }
    canvas{
        padding:1rem
    }
</style>