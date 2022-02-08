<template>
    <div class="container-xl clearfix">
        <div class="Subhead mt-3 mb-6">
            <div class="Subhead-heading">Java basics</div>
            <div class="Subhead-description">2021-2022 EPITA 3A</div>
        </div>

        <div class="col-4 float-left pr-10 border-right">
            <div class="markdown-body">
                <h2>Prerequisites</h2>
                <ul>
                    <li>Have a GitHub account</li>
                    <li>Have a <u>POSIX</u> terminal
                        <ul>
                            <li>Unix: native</li>
                            <li>Mac: native</li>
                            <li>Windows: Git BASH (embbeded in <b>Git for Windows</b>) is recommended</li>
                        </ul>
                    </li>
                    <li>Install a Git client</li>
                    <li>Install a JDK (Java Development Kit) <b>17</b>, recommended distribution is <a href="https://adoptium.net/">Eclipse Temurin</a> from <b>Adoptium</b></li>
                    <li>Install Maven <b>3.8.4</b></li>
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
                    Libraries & Frameworks in the Java Ecosystem -
                    <a href="https://raw.githubusercontent.com/lernejo/course-java-101-fr/rendered/main/pdf/index.pdf">PDF</a> -
                    <a href="https://lernejo.github.io/course-java-101-fr/">HTML</a>
                </div>
            </div>

            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <i class="fas fa-graduation-cap color-fg-attention"></i>
                </div>
                <div class="TimelineItem-body">
                    Java Project: Build a navy battling program communicating over HTTP - <a
                    href="https://github.com/lernejo/exercises/blob/master/projects/http_api_fr/EXERCISE.adoc">Subject</a>
                    - &nbsp; <fa icon="cogs" class="color-fg-success mr-1" />
                    <a href="https://github.com/lernejo/korekto-java-api-grader">Grading routine</a>
                    <div>Due date: 23 March 2022 20:00 CET</div>
                    <div>
                        <span class="Label">Java</span>
                        <span class="Label">Maven</span>
                        <span class="Label">JUnit</span>
                        <span class="Label">HTTP</span>
                    </div>
                </div>
            </div>

            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="pencil-alt" class="color-fg-attention" />
                </div>
                <div class="TimelineItem-body">
                    <b>1 - Java beginner exercise</b><br/> Build a CLI program -
                    <a href="https://github.com/lernejo/exercises/blob/master/java_fr/EXERCISE.adoc">Subject</a>
                    - &nbsp; <fa icon="cogs" class="color-fg-success mr-1" />
                    <a href="https://github.com/lernejo/korekto-java-basics-grader">Grading routine</a>
                    <div>Due date: 11 February 2022 20:00 CET</div>
                    <div>
                        <span class="Label">Compilation</span>
                        <span class="Label">Interface</span>
                        <span class="Label">Loop</span>
                        <span class="Label">Algorithms</span>
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
                    <div>Due date: 9 March 2022 20:00 CET</div>
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
                    <div>Due date: 11 March 2022 20:00 CET</div>
                    <div>
                        <span class="Label">Interface</span>
                        <span class="Label">Proxy</span>
                        <span class="Label">Composite</span>
                    </div>
                </div>
            </div>

            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <i class="fas fa-pencil-alt color-fg-attention"></i>
                </div>
                <div class="TimelineItem-body">
                    <i>Optional</i> - Java advanced exercise: Maven Multi-Module & Reflection - <a
                    href="https://github.com/lernejo/exercises/blob/master/multimodule_reflect_fr/EXERCISE.adoc">Subject</a>
                    <div>
                        <span class="Label">multi-module</span>
                        <span class="Label">Reflexion</span>
                        <span class="Label">Framework operation</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
