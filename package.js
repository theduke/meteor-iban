Package.describe({
  name: "theduke:iban",
  summary: "IBAN validation and conversion.",
  version: "0.0.5",
  git: "https://github.com/theduke/meteor-iban"
});

Package.on_use(function(api){
  both = ['client','server']

  api.versionsFrom('METEOR@1.0');

  api.addFiles('iban.js', both);
  api.export('IBAN', both)
});
