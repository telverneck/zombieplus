pipeline {
    agent {
        docker {
            image "telverneck/node-wd"
        }
    }
    stages {
        stage("Build"){
            steps{
                sh "npm install"
                sh "docker login"
            }
        }
         stage("Tests"){
             steps{
                sh "npm run test:ci"
             }
        }
    }
}