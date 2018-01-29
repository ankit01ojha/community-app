(function (module) {
    mifosX.directives = _.extend(module, {
        NumberValidateDirective: function ($compile) {
            return {
                restrict: 'E',
                require: '?ngmodel',
                link: function (scope, elm, attr, ctrl) {
                    scope.formNameAttribute = attr.valattributeform;
                    scope.inputAttributename = attr.valattribute;

                    var template = '<span  ng-show="' + scope.formNameAttribute + '.' + scope.inputAttributename + '.$invalid && ' + scope.formNameAttribute + '.' + scope.inputAttributename + '.$dirty">' +
                        '<small class="required error" ng-show="' + scope.formNameAttribute + '.' + scope.inputAttributename + '.$error.nval">' +
                        '{{' + "'label.mustbenumeric'" + ' | translate}}' +
                        '</small>' +
                        '</span>';
                    elm.html('').append($compile(template)(scope));
                }
            };
        }
    });
}(mifosX.directives || {}));

mifosX.ng.application.directive("numberValidate", ['$compile', mifosX.directives.NumberValidateDirective]).run(function ($log) {
    $log.info("NumberValidateDirective initialized");
});