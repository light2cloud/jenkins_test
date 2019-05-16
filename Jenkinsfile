def label = "worker-${UUID.randomUUID().toString()}"

podTemplate(label: label, cloud: 'kubernetes',
    containers: [
        containerTemplate(name: 'certified', image: '10.0.0.209/wt/node:10-certified', ttyEnabled: true, command: 'cat')
    ],
    volumes: [
        hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
        hostPathVolume(mountPath: '/tmp/cache', hostPath: '/tmp/cache/wt-eros'),
        hostPathVolume(mountPath: '/root/.ssh', hostPath: '/root/.ssh')
    ]
) {
    node(label) {
        
        def scmVars = checkout scm
        def commit = scmVars.GIT_COMMIT
        def branch = scmVars.GIT_BRANCH

      stage('git chenkout'){
             git credentialsId: '6926e733-f572-4f83-b9a9-6d8e223ce2a9', url: ' https://github.com/atinc/wt-eros'
      
  }

        stage('Run Unit Test') {
            script {
                if (branch != "origin/master" && branch != "master") {
               
                    echo 'Ready to run unit test'

                    container('certified') {

                        sh "npm -v"
                    }
                 }
                else {
                    echo 'Skip the unit test'
                }
            }
        
        }

    }
}