function themeConfig($mdThemingProvider) {
    'ngInject';
    var customBlueMap = $mdThemingProvider.extendPalette('blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    var customWhiteMap = $mdThemingProvider.extendPalette('grey', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.definePalette('white', customWhiteMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('grey', {
            'default': '800',
            'hue-1': '50',
            'hue-2': '200',
            'hue-3': '500'
        })
        .accentPalette('light-blue', {
            'default': '100',
            'hue-1': '100',
            'hue-2': '300',
            'hue-3': '300'
        })
        .warnPalette('amber', {
            'default': '900',
            'hue-1': '100',
        });
    
    // $mdThemingProvider.theme('navTheme')
        // .accentPalette('white')
        // .backgroundPalette('light-green')
    //     .backgroundPalette('white')
    //     .primaryPalette('customBlue', {
    //         'default': '500',
    //         'hue-1': '50'
    //     })
    //     .accentPalette('green', {
    //         'default': '500',
    //         'hue-3': '700'
    //     });
    // $mdThemingProvider.theme('input', 'default')
    //     .primaryPalette('grey');

}
export default themeConfig;
