(function (module) {
    mifosX.directives = _.extend(module, {
        NumValidateDirective: function () {
            var numRegex = /^([0-9])*([0-9]+(,)[0-9]+)*$/;
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, elm, attr, ctrl) {
                    elm.bind('blur', function () {
                        scope.$apply(function () {
                            var isMatchRegex = numRegex.test(elm.val());
                            if(isMatchRegex || elm.val() == ''){
                                ctrl.$setValidity('nval', true);
                                console.log("1");
                            }else {
                                ctrl.$setValidity('nval', false);
                                console.log("0");
                            }
                        });
                    });
                }
            };
        }
    });
}(mifosX.directives || {}));

mifosX.ng.application.directive("numValidate", [mifosX.directives.NumValidateDirective]).run(function ($log) {
    $log.info("NumValidateDirective initialized");
});
