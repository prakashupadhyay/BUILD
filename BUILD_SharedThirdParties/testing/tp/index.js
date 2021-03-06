var pkg = require("./package.json");
var tp = {};

if (pkg.peerDependencies) {
    Object.keys(pkg.peerDependencies).forEach(function (dependency) {
        tp[dependency] = require(dependency);
    });
}

if (pkg.dependencies) {
    Object.keys(pkg.dependencies).forEach(function (dependency) {
        tp[dependency] = require(dependency);
    });
}

module.exports = tp;
