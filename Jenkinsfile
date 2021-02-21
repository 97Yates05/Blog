pipeline {
  agent any
  stages {
    stage('构建镜像') {
      steps {
        sh 'docker build -t personal/blog .'
      }
    }
    stage('部署镜像') {
       steps {
         sh 'docker container rm -f Blog'
         sh 'docker run --net=website --name=Blog --restart=always -p 4000:3000 -d personal/blog'
       }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}
