pipeline {
    agent {
        docker {
            image "telmocorrea/node-wd"
            args "--network=skynet"
        }
    }
    stages {
        stage("Build"){
            steps{
                sh "npm install"
            }
        }
         stage("Tests"){
             steps{
                sh "npm run test:ci"
             }
        }
    }
}