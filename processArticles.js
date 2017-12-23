const path = require('path');
const Pull = require('./modules/pull');
const Article = require('./modules/article');
const Commons = require('./modules/commons');
const Config = require('./modules/config');

const config = new Config();
const article = new Article();
const articleList = {};

class ProcessArticles extends Pull {
  constructor() {
    super();
    this.wikiList = {};
    // this.assetList = {};
  }

  articleFn(listItem, callback) {
    // check if file exists first
    article.processHTML(listItem, this.wikiList, this.queue.push, callback);
  }

  async beforeStart(list) {
    console.log('beforelist', list.length);

    list.forEach(item => this.wikiList[item] = true);

    // const assetFilename = path.join(__dirname, 'assetList.txt');
    // const assetListArr = await Commons.loadListFile(assetFilename, null);
    // assetListArr.forEach(item => this.assetList[item] = true);

    this.queue.push(list);
  }
}

const processArticles = new ProcessArticles();
