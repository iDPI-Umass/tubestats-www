<main>
    <section class="tube-copy">
        <h1>About the data</h1>

        <h2>Randomly sampling YouTube</h2>
        <p>
            A large, random sample of YouTube enables the estimation of the platform's size, viewership, and growth over time. Videos suggested by the recommender system or surfaced by topic-based queries to the search engine—how most users interact with YouTube—are not representative of the entire platform, but rather tend towards higher view and quality videos that are in the user's inferred language.
        </p>
        <p>
            Our <a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos</a> paper establishes a random sampling method for YouTube, based on generating trillions of random 11 character-long video identifiers. We then applied the dialing for videos method to confirm the randomness of the "random prefix sampling" method, first described in a <a href="https://doi.org/10.1145/2068816.2068851" target="_blank" rel="noopener noreferrer">2011 paper by Zhou et al.</a>. Prefix sampling's 1000x efficiency advantage over our provably random "dialing" method makes it the preferred random sampling method, and all samples on TubeStats are prefix sampled.
        </p>
        <h2>
            Estimating YouTube's total size
        </h2>
        <p>
            Obtaining the exact number of videos hosted on YouTube would require checking each of the 18.4 quintillion valid video IDs to see if a video existed at that URL, as not every valid ID has been assigned to a video. Random sampling allows us to more efficiently estimate YouTube's size without checking every valid video ID.
        </p>
        <p>
            By counting the number of random video IDs we generate and the number of IDs associated with videos, we can calculate the average rate at which videos are randomly distributed across the entire ID address space and use this rate to estimate YouTube's size.
        </p>
        <h2>Extracting metadata</h2>
        <p>
            We extracted metadata for each randomly sampled video using the <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">yt-dlp</a> package. TubeStats presents only the aggregated metadata statistics of our random samples.
        </p>
        <h3>
            Spoken language classification
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
        <h3>
            Music detection
        </h3>
            <p>
                YouTube Music is a streaming music service, but a song on the service is just like any other YouTube video and thus included as part of our samples. It is best understood as a subset of all music on YouTube, and we include this simply as another data point to understand the YouTube content landscape. The <b>Accessible in YouTube Music</b> chart is likely not inclusive of all music videos on YouTube.
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