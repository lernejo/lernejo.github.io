<template>
    <div class="container-xl clearfix">
        <div class="Subhead mt-3 mb-6">
            <div class="Subhead-heading">2021-2022 EPITA 4A</div>
            <div class="Subhead-description">4A - Java for Entreprise</div>
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
                    <li>Install Maven <b>3.8.4</b></li>
                    <li>Install Docker</li>
                    <li>Install Docker Compose V2</li>
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
                    <a href="https://raw.githubusercontent.com/lernejo/course-java-202-fr/rendered/main/pdf/index.pdf">PDF</a> -
                    <a href="https://lernejo.github.io/course-java-202-fr/">HTML</a>
                </div>
            </div>

            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <i class="fas fa-graduation-cap color-fg-attention"></i>
                </div>
                <div class="TimelineItem-body">
                    Java Project: Build a Video Game Search Engine - <a
                    href="https://github.com/lernejo/exercises/blob/master/projects/spring_rabbitmq_es_fr/VIDEO_GAME_SEARCH_ENGINE.adoc">Subject</a>
                    <div>Due date: 9 February 2022 20:00 CET</div>
                    <div>
                        <span class="Label">Git</span>
                        <span class="Label">Maven</span>
                        <span class="Label">JUnit</span>
                        <span class="Label">Spring</span>
                        <span class="Label">HTTP</span>
                        <span class="Label">AMQP 0.9</span>
                        <span class="Label">ElasticSearch</span>
                    </div>
                </div>
            </div>

            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="pencil-alt" class="color-fg-attention" />
                </div>
                <div class="TimelineItem-body">
                    <b>1 - HTTP API, JDBC & Scaling with Docker Compose</b><br/> TODO list -
                    <a href="https://github.com/lernejo/exercises/blob/master/simple_web_app_spring_fr/EXERCISE.adoc">Subject</a>
                    - &nbsp; <fa icon="cogs" class="color-fg-success mr-1" />
                    <a href="https://github.com/lernejo/korekto-simple-web-app-grader">Grading routine</a>
                    <div>Due date: 26 January 2022 20:00 CET</div>
                    <div>
                        <span class="Label">Spring</span>
                        <span class="Label">HTTP</span>
                        <span class="Label">JDBC</span>
                        <span class="Label">Docker</span>
                    </div>
                </div>
            </div>

            <div class="TimelineItem">
                <div class="TimelineItem-badge">
                    <fa icon="pencil-alt" class="color-fg-attention" />
                </div>
                <div class="TimelineItem-body">
                    <b>2 - Communication asynchrone avec RabbitMQ</b><br/> client / server de Chat -
                    <a href="https://github.com/lernejo/exercises/blob/master/amqp_fr/EXERCISE.adoc">Subject</a>
                    - &nbsp; <fa icon="cogs" class="color-fg-success mr-1" />
                    <a href="https://github.com/lernejo/korekto-amqp-grader">Grading routine</a>
                    <div>Due date: 27 January 2022 20:00 CET</div>
                    <div>
                        <span class="Label">Spring</span>
                        <span class="Label">RabbitMQ</span>
                        <span class="Label">Docker</span>
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
        </div>
    </div>
</template>
