#!/usr/bin/env groovy

node {
    stage("Git clone"){
	git credentialsId: 'GIT_CREDENTIALS', url: 'https://github.com/neekr01/microservicegateway.git'
    }

    stage("Maven Clean, Build, Docker Push"){

    sh "chmod +x mvnw && ./mvnw -ntp -Pprod verify jib:dockerBuild"

    sh "docker image tag microservicegateway gcr.io/payment-platform-204588/microservicegateway"
	sh "docker push gcr.io/payment-platform-204588/microservicegateway"
	
    }    

    stage("Deployment on kubernetes"){
	sh "gcloud container clusters get-credentials kube-cluster --zone us-central1-a --project payment-platform-204588"
	sh "sh kubectl-apply.sh && cd .."
    }
}




// pipeline{
//     agent any
//     tools {
//         maven 'maven-362'
//         nodejs "node13"
//     }
//     stages{
//         stage('Git Clone'){
//         steps{
//             git credentialsId: 'GIT_CREDENTIALS', url: 'https://github.com/neekr01/microservicegateway.git'
//         }
//     }
    
//     stage('Maven clean'){
//         steps{
//         sh "mvn clean"
//         }
//     }

      
//     	stage ('Clean') {
// 		    steps {
//             	sh "rm -rf build"
//             }
// 		}        
//         stage('Install') { 
//             steps {
//                 sh "npm i"
//             }
//         }
//         stage ('Test') {
// 		    steps {
//                 sh "npm test"
//             }
// 		}

//            stage ('npm Build') {
// 		    steps {
//             	sh "(npm run build || true)"
//             }
// 		}


//     stage('Maven build'){
//          steps{
//         sh "mvn package"
//     }
//     }

//     stage('Docker Image'){
//         steps{
//         sh "docker build -t neekr01/microservicegateway ."
//         }
//     }

//      stage('Docker Push'){
//          steps{
//     withCredentials([string(credentialsId: 'DOCKER_HUB_CREDENTIALS', variable: 'DOCKER_HUB_CREDENTIALS')]) {
//    sh "docker login -u neekr01 -p ${DOCKER_HUB_CREDENTIALS}"
// }
//         sh "docker push neekr01/microservicegateway "
//         }
//     }
//  }  
// }



// node {
//     stage('checkout') {
//         checkout scm
//     }

//     docker.image('jhipster/jhipster:v6.4.1').inside('-u jhipster -e MAVEN_OPTS="-Duser.home=./"') {
//         stage('check java') {
//             sh "java -version"
//         }

//         stage('clean') {
//             sh "chmod +x mvnw"
//             sh "./mvnw -ntp clean"
//         }

//         stage('install tools') {
//             sh "./mvnw -ntp com.github.eirslett:frontend-maven-plugin:install-node-and-npm -DnodeVersion=v10.16.3 -DnpmVersion=6.11.3"
//         }

//         stage('npm install') {
//             sh "./mvnw -ntp com.github.eirslett:frontend-maven-plugin:npm"
//         }

//         stage('backend tests') {
//             try {
//                 sh "./mvnw -ntp verify"
//             } catch(err) {
//                 throw err
//             } finally {
//                 junit '**/target/test-results/**/TEST-*.xml'
//             }
//         }

//         stage('frontend tests') {
//             try {
//                 sh "./mvnw -ntp com.github.eirslett:frontend-maven-plugin:npm -Dfrontend.npm.arguments='run test-ci'"
//             } catch(err) {
//                 throw err
//             } finally {
//                 junit '**/target/test-results/**/TEST-*.xml'
//             }
//         }

//         stage('packaging') {
//             sh "./mvnw -ntp verify deploy -Pprod -DskipTests"
//             archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
//         }
//         stage('quality analysis') {
//             withSonarQubeEnv('sonar') {
//                 sh "./mvnw -ntp initialize sonar:sonar"
//             }
//         }
//     }

//     def dockerImage
//     stage('publish docker') {
//         // A pre-requisite to this step is to setup authentication to the docker registry
//         // https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#authentication-methods
//         sh "./mvnw -ntp jib:build"
//     }
// }
