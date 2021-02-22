pipeline {
  agent any
  stages {
    stage('构建镜像') {
      steps {
        sh 'docker build -t personal/blog-fe .'
      }
    }
    stage('部署镜像') {
       steps {
         sh 'docker container rm -f Blog'
         sh 'docker run --net=website --name=Blog --restart=always -d personal/blog-fe'
       }
    }
    stage('删除虚悬镜像') {
       steps {
         sh 'docker image prune -f'
       }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}
