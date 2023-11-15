pipeline {
    agent any
    
    stages {
        stage("Code"){
            steps{
                echo "Cloning the code"
                 git url: "https://github.com/kushkaushik/jenkins.git", branch : "main"
            }
        }
        stage("build"){
             steps{
                echo "Building the image"
                sh "docker build -t node-app ."
            }
        }
        stage("Push to Docker Hub"){
             steps{
                echo "Pushing the image to docker hub"
                withCredentials([usernamePassword(credentialsId:"DOCKERHUB", passwordVariable:"dockerHubPass" , usernameVariable: "dockerHubUser")]){
                sh "docker tag node-app ${env.dockerHubUser}/node-app:latest"
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                sh "docker push ${env.dockerHubUser}/node-app:latest"
                    
                }
            }
        }
        stage("Deploy"){
             steps{
                echo "Deploying the container"
                // sh "docker run -d -p 3000:3000 kush271/node-app:latest"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
