//const bookAPI = require('../controllers/book.js');
const koaRouter = require('koa-router');

const router = koaRouter()

router.get('/book/:id', bookAPI.getBook);
router.get('/book', bookAPI.getBookByCategory)
router.post('/book/:id/create', bookAPI.createBook)
router.post('/book/:id/delete', bookAPI.removeBook)
router.post('/book/:id/update', bookAPI.updateBook)

module.exports = router;
