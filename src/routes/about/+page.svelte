<main>
    <section class="tube-copy">
        <div class="logo">
            <img src="tubestats.png">
        </div>
        <h2>Introduction</h2>
            <p>
                TubeStats is an interactive dashboard that allows users to explore platform-wide data for YouTube based on random prefix sampling and metadata analysis. The method used to collect data for this dashboard is described in <a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos: A Random Sample of YouTube</a>.
            </p>
        <h2>Acknowledgements</h2>
            <p>
                TubeStats is a collaboration between the <a href="https://publicinfrastructure.org" target="_blank" rel="noopener noreferrer">Initiative for Digital Public Infrastructure</a> (iDPI) at the University of Massachusetts Amherst and the <a href="https://mediacloud.org" target="_blank" rel="noopener noreferrer">Media Cloud</a> project.
            </p>
            <p>
                Kevin Zheng, research fellow at the Initiative for Digital Public Infrastructure, is developing and maintaining this site.
            </p>
            <p>
                Ryan McGrady, researcher at Media Cloud, led the paper <a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos: A Random Sample of YouTube</a>, with contributions from Kevin Zheng, Rebecca Curran, Jason Baumgartner, and Ethan Zuckerman.
            </p>
            <p>
                David Harper, from iDPI's development partner <a href="https://pandastrike.com/" target="_blank" rel="noopener noreferrer">Panda Strike</a>, provided technical expertise to quickly bring this project to life.
            </p>
            <p>
                <a href="https://github.com/iDPI-Umass/tubestats-www" target="_blank" rel="noopener noreferrer">View source code here</a>
            </p>
        <h2>Resources</h2>
        <h2>Background</h2>
            <p>
                YouTube is the second most popular website in the world, second only to Google Search. Not only is it the largest video content sharing platform, but it is also the largest social network on the internet, surpassing Facebook, Instagram, and X. From entertainment and music to news and education, YouTube is an all-encompassing cultural titan. However, despite its popularity, very little is known about the platform’s fundamental characteristics—like the number of videos it hosts, the average views a video gets, or the distribution of languages spoken across the entire site—which require a random sample to calculate.
            </p>
            <p>
                As a platform with significant importance and influence, YouTube contains a great wealth of data for researchers across disciplines to analyze. However, unlike Facebook and other text-based platforms, much of YouTube’s data resides within videos which are challenging to process and analyze. In addition, researchers have limited to no access to YouTube’s code, data, and recommender system, complicating the process of obtaining a large, representative sample of videos.
            </p>
        <h2>Randomly Sampling YouTube</h2>
            <p>
                A large, random sample of YouTube enables the estimation of the platform's size, viewership, and growth over time. Videos suggested by the recommender system or surfaced by topic-based queries to the search engine—how most users interact with YouTube—are not representative of the entire platform, but rather tend towards higher view and quality videos that are in the user's inferred language.
            </p>
            <p>
                Our <a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos</a> paper establishes random sampling method for YouTube, based on generating trillions of random 11 character-long video identifiers. We then applied the dialing for videos method to confirm the randomness of the "random prefix sampling" method, first described in a <a href="https://doi.org/10.1145/2068816.2068851" target="_blank" rel="noopener noreferrer">2011 paper by Zhou et al.</a>. Prefix sampling's 1000x efficiency advantage over our provably random dialing method makes it the preferred random sampling method, and all samples on TubeStats will be prefix sampled.
            </p>
            <h3>
                Estimating YouTube's Total Size
            </h3>
                <p>
                    Obtaining the exact number of videos hosted on YouTube would require checking each of the 18.4 quintillion valid video IDs to see if a video existed at that URL, as not every valid ID has been assigned to a video. Random sampling allows us to more efficiently estimate YouTube's size without checking every valid video ID.
                </p>
                <p>
                    By counting the number of random video IDs we generate and the number of IDs associated with videos, we can calculate the average rate at which videos are randomly distributed across the entire ID address space and use this rate to estimate YouTube's size.
                </p>
        <h2>Extracting Metadata</h2>
            <p>
                We extracted metadata for each randomly sampled video using the <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">yt-dlp</a> package. TubeStats presents only the aggregated metadata statistics of our random samples.
            </p>
            <h3>
                Spoken Language Classification
            </h3>
                <p>
                    The near-global use of YouTube means that the platform likely hosts videos in nearly every spoken language on the planet. By identifying languages spoken in the tens of thousands of videos in our random samples, we can begin to study language group-specific trends on YouTube.
                </p>
                <p>
                    The <b>Detectable Language</b> chart on TubeStats displays the results of our language analysis using a pre-trained speech recognition model. We first extract the audio for each randomly sampled video using the <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">yt-dlp</a> package. Each audio file is then passed into <a href="https://arxiv.org/abs/2212.04356" target="_blank" rel="noopener noreferrer">OpenAI's Whisper automatic speech recognition model</a>, and we record the automatically detected language token from the model's output. For the purposes of this chart, we exclude videos with model output probabilities less than 0.75.
                </p>
                <p>
                    We believe that this approach to spoken language detection is more comprehensive than one that relies solely on metadata analysis. Although automatic captions are increasingly common on YouTube, only a small fraction of our random samples have been captioned in one of the only <a href="https://support.google.com/youtube/answer/6373554" target="_blank" rel="noopener noreferrer">14 languages</a> that YouTube has the capability of generating captions for.
                </p>
    </section>

</main>



<style>
    main {
        flex: 1 1 0;
        min-height: 0;
        max-width: 100vw;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        overflow-y: scroll;
        background-color: var(--tube-color-null);
    }
    .logo {
        padding: 1rem;
        flex: 1 1 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .logo img {
        border: none;
        border-radius: 0;
        max-width: 175px;
    }
</style>