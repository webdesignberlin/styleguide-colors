module.exports = class{
  constructor(opt){
    if(!opt){
      opt = {}
    }
    this.separator = opt.separator || ',';
    this.headline = opt.headline || 'Colors';
    this.wrapper = opt.wrapper || 'section';
    this.templatePath = opt.templatePath || 'template.html';
    this.sassPath = opt.sassPath || 'test/app/styles/_variables.scss';
    this.outputFile = opt.outputFile || null;
  }
};