<main>
    <section class="tube-copy">
        <div class="logo">
            <img src="tubestats.png">
        </div>
        <h2>About</h2>
            <p>
                TubeStats is an interactive dashboard that provides users with up-to-date information about YouTube based on random sampling. We periodically create a random sample of YouTube big enough to find basic statistics about the site like how many videos it hosts, how many are categorized as music or games, and how many views videos get on average. This is fundamental information about one of the most important websites in the world, and the sort of data that researchers, journalists, and others need in order to properly study the content YouTube hosts.
            </p>
            <p>
                This site is an outgrowth of a long research project in the <a href="https://publicinfrastructure.org" target="_blank" rel="noopener noreferrer">Initiative for Digital Public Infrastructure</a> at the University of Massachusetts Amherst. We wanted to study certain kinds of content on YouTube and quickly realized it was impossible to contextualize findings because there was no way to produce a truly random sample of YouTube to use as a basis for comparison.
            </p>
            <p>
                A random sample can tell you how representative your sample is. If you find 1,000 instances of a type of video in a study, a random sample can answer "out of how many?" If you rely on YouTube's search or recommendation algorithms to produce a collection of videos, a random sample can help inform how the algorithm is guiding your selection. In short, they’re an essential tool to understand a subject, but can be difficult to obtain.
            </p>
            <p>
                YouTube is one of the largest and most important websites in the world, but it does not provide a way to produce a random sample or aggregate data from its videos. In addition, videos are more difficult for computers to parse than content from text-based websites. Our random sampling method works to mitigate the challenges of researching YouTube.
            </p>
            <p>
                The primary output of our project was a paper, "<a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos: A Random Sample of YouTube</a>," published in the Journal of Quantitative Description: Digital Media in December 2023. It includes a very thorough analysis of a random sample we produced through our own method in late 2022.
            </p>
            <p>
                By the time we published our paper, however, the data was already a year old. We estimate that more than three billion videos had been uploaded in the interim. We could publish papers with periodic updates, but the timeline of academic publishing is long and people need access to current data. Furthermore, the sampling method we developed for that paper is effective, but too slow and resource intensive to reproduce on a timely basis. For those reasons, we used our paper to validate a second method called "Random Prefix Sampling," proposed by another team <a href="https://doi.org/10.1145/2068816.2068851" target="_blank" rel="noopener noreferrer">back in 2011</a>. It relies on an odd mechanism to work and has more limitations, but we found that a sample it produced was similar enough to ours to be considered random enough for research purposes. With a validated faster method, we are able to provide regular updates via TubeStats.
            </p>
        <h2>How to Cite TubeStats</h2>
            <p>
                When you visit TubeStats, by default it displays statistics for the most recent sample. Older samples are retained, however, and visible through a dropdown menu at the top of the page. We recommend citing a specific sample. For example, to use the December 19, 2023 sample:
            </p>
            <p>
                Zheng, K., McGrady, R., & Zuckerman, E. (2023, December 19). <em>TubeStats</em>. Retrieved January 25, 2024. https://tubestats.org
            </p>
            <p>
                If using these statistics for research purposes, we also recommend citing the paper which led to this website:
            </p>
            <p>
                McGrady, R., Zheng, K., Curran, R., Baumgartner, J., & Zuckerman, E. (2023). Dialing for Videos: A Random Sample of YouTube. <em>Journal of Quantitative Description: Digital Media</em>, 3. https://doi.org/10.51685/jqd.2023.022
            </p>
        <h2>Acknowledgements</h2>
            <p>
                TubeStats is a project from the <a href="https://publicinfrastructure.org" target="_blank" rel="noopener noreferrer">Initiative for Digital Public Infrastructure</a> (iDPI) at the University of Massachusetts Amherst.
            </p>
            <p>
                Kevin Zheng, research fellow at the Initiative for Digital Public Infrastructure, is developing and maintaining this site.
            </p>
            <p>
                Ryan McGrady, researcher at Media Cloud, led the paper <a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos: A Random Sample of YouTube</a>, with contributions from Kevin Zheng, Rebecca Curran, Jason Baumgartner, and Ethan Zuckerman.
            </p>
            <p>
                David Harper, from iDPI's development partner <a href="https://pandastrike.com/" target="_blank" rel="noopener noreferrer">Panda Strike</a>, provided technical expertise to quickly bring this project to life. Lucas Ruud provided technical writing expertise to document the project.
            </p>

    </section>

</main>

<!--<h2>Introduction</h2>-->
<!--<p>-->
<!--    TubeStats is an interactive dashboard that allows users to explore platform-wide data for YouTube based on random prefix sampling and metadata analysis. The method used to collect data for this dashboard is described in <a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos: A Random Sample of YouTube</a>.-->
<!--</p>-->

<!--<p>-->
<!--    <a href="https://github.com/iDPI-Umass/tubestats-www" target="_blank" rel="noopener noreferrer">View source code here</a>-->
<!--</p>-->
<!--<h2>Randomly Sampling YouTube</h2>-->
<!--<p>-->
<!--    A large, random sample of YouTube enables the estimation of the platform's size, viewership, and growth over time. Videos suggested by the recommender system or surfaced by topic-based queries to the search engine—how most users interact with YouTube—are not representative of the entire platform, but rather tend towards higher view and quality videos that are in the user's inferred language.-->
<!--</p>-->
<!--<p>-->
<!--    Our <a href="https://journalqd.org/article/view/4066" target="_blank" rel="noopener noreferrer">Dialing for Videos</a> paper establishes random sampling method for YouTube, based on generating trillions of random 11 character-long video identifiers. We then applied the dialing for videos method to confirm the randomness of the "random prefix sampling" method, first described in a <a href="https://doi.org/10.1145/2068816.2068851" target="_blank" rel="noopener noreferrer">2011 paper by Zhou et al.</a>. Prefix sampling's 1000x efficiency advantage over our provably random dialing method makes it the preferred random sampling method, and all samples on TubeStats will be prefix sampled.-->
<!--</p>-->
<!--<h3>-->
<!--    Estimating YouTube's Total Size-->
<!--</h3>-->
<!--<p>-->
<!--    Obtaining the exact number of videos hosted on YouTube would require checking each of the 18.4 quintillion valid video IDs to see if a video existed at that URL, as not every valid ID has been assigned to a video. Random sampling allows us to more efficiently estimate YouTube's size without checking every valid video ID.-->
<!--</p>-->
<!--<p>-->
<!--    By counting the number of random video IDs we generate and the number of IDs associated with videos, we can calculate the average rate at which videos are randomly distributed across the entire ID address space and use this rate to estimate YouTube's size.-->
<!--</p>-->
<!--<h2>Extracting Metadata</h2>-->
<!--<p>-->
<!--    We extracted metadata for each randomly sampled video using the <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">yt-dlp</a> package. TubeStats presents only the aggregated metadata statistics of our random samples.-->
<!--</p>-->
<!--<h3>-->
<!--    Spoken Language Classification-->
<!--</h3>-->
<!--<p>-->
<!--    The near-global use of YouTube means that the platform likely hosts videos in nearly every spoken language on the planet. By identifying languages spoken in the tens of thousands of videos in our random samples, we can begin to study language group-specific trends on YouTube.-->
<!--</p>-->
<!--<p>-->
<!--    The <b>Detectable Language</b> chart on TubeStats displays the results of our language analysis using a pre-trained speech recognition model. We first extract the audio for each randomly sampled video using the <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">yt-dlp</a> package. Each audio file is then passed into <a href="https://arxiv.org/abs/2212.04356" target="_blank" rel="noopener noreferrer">OpenAI's Whisper automatic speech recognition model</a>, and we record the automatically detected language token from the model's output. For the purposes of this chart, we exclude videos with model output probabilities less than 0.75.-->
<!--</p>-->
<!--<p>-->
<!--    We believe that this approach to spoken language detection is more comprehensive than one that relies solely on metadata analysis. Although automatic captions are increasingly common on YouTube, only a small fraction of our random samples have been captioned in one of the only <a href="https://support.google.com/youtube/answer/6373554" target="_blank" rel="noopener noreferrer">14 languages</a> that YouTube has the capability of generating captions for.-->
<!--</p>-->


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