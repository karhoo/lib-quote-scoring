@Library(value="service-builder-shared-library@master", changelog=false) _
import com.karhoo.Constants

CICD {
  containerImages = [:]
  containerImages["builder"] = [name: "karhoo-nodejs", tag:"0.0.1"]
  steps = [
    "npm run ci",
    "npm run test",
  ]
  pipeline = Constants.NO_DOCKER_IMAGE_NO_SCRATCH_ENV_NO_API_TESTS  + [createGithubRelease: false]
}
