function themeConfigNav($mdThemingProvider) {
    'ngInject';
    var customGreenMap = $mdThemingProvider.extendPalette('light-green', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'a4cc8d'
    });
    
    $mdThemingProvider.definePalette('customGreenMap', customGreenMap);
    // $mdThemingProvider.theme('default')
    //     .primaryPalette('grey', {
    //         'default': '900',
    //         'hue-1': '50',
    //         'hue-2': '200',
    //         'hue-3': '500'
    //     })
    //     .accentPalette('light-green', {
    //         'default': '200'
    //     })
        
    $mdThemingProvider.theme('navTheme')
        // .primaryPalette('customGreenMap', {
        //     'default': '50',
        //     'hue-1': '800',
        // })
        .primaryPalette('light-blue', {
            'default': '400',
        })
        .accentPalette('white')
        .warnPalette('customGreenMap', {
            'default': '50',
            'hue-1': '800',
        })
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
export default themeConfigNav;
