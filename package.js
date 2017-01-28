Package.describe({
    name: 'lauren:pick-a-color',
    summary: 'An easy-to-use jQuery color picker for Twitter Bootstrap.',
    version: '1.2.3',
    git: 'https://github.com/lauren/pick-a-color.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');
    api.use(['jquery', 'twbs:bootstrap'], 'client');

    api.addFiles([
        'build/dependencies/tinycolor-0.9.15.min.js',
        'src/js/pick-a-color.js',
        'build/1.2.3/css/pick-a-color-1.2.3.min.css',
    ], 'client', {bare: true});
});
