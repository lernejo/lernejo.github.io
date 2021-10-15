<template>
    <div class="container-xl clearfix">
        <div class="Subhead mt-3 mb-6">
            <div class="Subhead-heading">2021-2022 ESIEA</div>
            <div class="Subhead-description">4A - Software Architecture</div>
        </div>
        <div class="col-4 float-left pr-10 border-right">
            <div class="markdown-body">
                <h2>Prerequisites</h2>
                <ul>
                    <li>Have a GitHub account</li>
                    <li>Have 6 Gb RAM available / free</li>
                    <li>Have a <u>POSIX</u> terminal
                        <ul>
                            <li>Unix: native</li>
                            <li>Mac: native</li>
                            <li>Windows: Git BASH (embbeded in <b>Git for Windows</b>) is recommended</li>
                        </ul>
                    </li>
                    <li>Install a Git client</li>
                    <li>Install a JDK (Java Development Kit) <b>17</b>, recommended distribution is <a href="https://adoptium.net/">Eclipse Temurin</a> from <b>Adoptium</b></li>
                    <li>Install Maven <b>3.8.3</b></li>
                    <li>Install Docker</li>
                    <li>Install IntelliJ, recommended distribution is the Community Edition</li>
                </ul>
            </div>
        </div>
        <div class="col-8 float-left pl-10">
            <h1>Content</h1>
            <br/>
            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="book" class="color-fg-done" />
                </div>
                <div class="TimelineItem-body">
                    Software Architecture with Java - 
                    <a href="https://raw.githubusercontent.com/lernejo/course-java-201-fr/rendered/main/pdf/index.pdf">PDF</a> - 
                    <a href="https://lernejo.github.io/course-java-201-fr/">HTML</a>
                </div>
            </div>
            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="pencil-alt" class="color-fg-attention" />
                </div>
                <div class="TimelineItem-body">
                    <b>1 - Git exercise</b><br/> Mastering history modifications -
                    <a href="https://github.com/lernejo/exercises/blob/master/git_fr/EXERCISE.md">Subject</a>
                    - &nbsp; <fa icon="cogs" class="color-fg-success mr-1" />
                    <a href="https://github.com/lernejo/korekto-git-grader">Grading routine</a>
                    <div>
                        <span class="Label">Git</span>
                        <span class="Label">commit</span>
                        <span class="Label">rebase</span>
                    </div>
                </div>
            </div>
            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="pencil-alt" class="color-fg-attention" />
                </div>
                <div class="TimelineItem-body">
                    <b>2 - Maven & CI exercise</b><br/> Project setup + code some tests -
                    <a href="https://github.com/lernejo/exercises/blob/master/maven_fr/EXERCISE.adoc">Subject</a>
                    - &nbsp; <fa icon="cogs" class="color-fg-success mr-1" />
                    <a href="https://github.com/lernejo/korekto-maven-grader">Grading routine</a>
                    <div>
                        <span class="Label">Maven</span>
                        <span class="Label">GitHub Actions</span>
                        <span class="Label">JUnit5</span>
                    </div>
                </div>
            </div>
            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="pencil-alt" class="color-fg-attention" />
                </div>
                <div class="TimelineItem-body">
                    <b>3 - Decoupling Objects</b><br/> Guess game & Logger -
                    <a href="https://github.com/lernejo/exercises/blob/master/decoupling_fr/EXERCISE.adoc">Subject</a>
                    - &nbsp; <fa icon="cogs" class="color-fg-success mr-1" />
                    <a href="https://github.com/lernejo/korekto-decoupling-grader">Grading routine</a>
                    <div>
                        <span class="Label">Interface</span>
                        <span class="Label">Proxy</span>
                        <span class="Label">Composite</span>
                    </div>
                </div>
            </div>
            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="pencil-alt" class="color-fg-attention" />
                </div>
                <div class="TimelineItem-body">
                    <b>3 - HTTP API, JDBC & Scaling with Docker Compose</b><br/> TODO list -
                    <a href="https://github.com/lernejo/exercises/blob/master/simple_web_app_spring_fr/EXERCISE.adoc">Subject</a>
                    <div>
                        <span class="Label">Spring</span>
                        <span class="Label">JDBC</span>
                        <span class="Label">Docker</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
