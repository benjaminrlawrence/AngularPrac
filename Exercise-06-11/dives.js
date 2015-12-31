angular.module('diveLog', [])
    .controller('diveLogCtrl', DiveLogCtrl);

function DiveLogCtrl($scope) {
    $scope.dives = [
    {
        site: 'Abu Gotta Ramada',
        location: 'Hurghada, Egypt',
        depth: 72,
        time: 54
    },
    {
        site: 'Ponte Mahoon',
        location: 'Maehbourg, Maritius',
        depth: 54,
        time: 38
    },
    {
        site: 'Molnar Cave',
        location: 'Budapest, Hungary',
        depth: 98,
        time: 62
    }];
    $scope.options = [
        { id: 'sm', name: 'Small cards' },
        { id: 'smbl', name: 'Small cards with blue background' },
        { id: 'smrd', name: 'Small cards with red background' },
        { id: 'bg', name: 'Big cards' },
        { id: 'bgbl', name: 'Big cards with blue background' },
        { id: 'bgrd', name: 'Big cards with red bacground' }
    ];
    $scope.selection = 'sm';

    $scope.isSmall = function () {
        return $scope.selection.indexOf('sm') >= 0;
    };

    $scope.isBig = function () {
        return $scope.selection.indexOf('bg') >= 0;
    }

    $scope.isBlue = function () {
        return $scope.selection.indexOf('bl') >= 0;
    }

    $scope.isRed = function () {
        return $scope.selection.indexOf('rd') >= 0;
    }

    $scope.size = function () {
        return $scope.selection.indexOf('sm') >= 0
            ? "col-sm-4" : "col-sm-6";
    }

    $scope.color = function () {
        return $scope.selection.indexOf('bl') >= 0
            ? {
                'border': '2px solid navy',
                'background-color': 'navy',
                'color': 'white'
            }
            : ($scope.selection.indexOf('rd') >= 0
                ? {
                    'border': '2px solid darkred',
                    'background-color': 'darkred',
                    'color': 'white'
                } : {});
    }
}