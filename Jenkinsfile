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
            }
        }
         stage("Tests"){
             steps{
                sh "npm run test:ci"
             }
        }
    }
}