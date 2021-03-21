
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


var indexRouter = require('./routes/index');

const app = express();



  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  app.use('/', indexRouter);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.get('/t', (req,res) =>{
    res.render('pages/index', { title: 'yesyes' });
});













//  
//  
//  // read item
//  app.get('/api/read/:item_id', (req, res) => {
//      (async () => {
//          try {
//              const document = db.collection('items').doc(req.params.item_id);
//              let item = await document.get();
//              let response = item.data();
//              return res.status(200).send(response);
//          } catch (error) {
//              console.log(error);
//              return res.status(500).send(error);
//          }
//          })();
//      });
//  
//
//
//  // read all
//  app.get('/api/read', (req, res) => {
//    console.log('reds')
//      (async () => {
//          try {
//              let query = db.collection('items');
//              let response = [];
//              await query.get().then(querySnapshot => {
//              let docs = querySnapshot.docs;
//              for (let doc of docs) {
//                  const selectedItem = {
//                      id: doc.id,
//                      item: doc.data().item
//                  };
//                  response.push(selectedItem);
//              }
//              });
//              return res.status(200).send(response);
//          } catch (error) {
//              console.log(error);
//              return res.status(500).send(error);
//          }
//          })();
//      });
//  
//  // update
//  app.put('/api/update/:item_id', (req, res) => {
//  (async () => {
//      try {
//          const document = db.collection('items').doc(req.params.item_id);
//          await document.update({
//              item: req.body.item
//          });
//          return res.status(200).send();
//      } catch (error) {
//          console.log(error);
//          return res.status(500).send(error);
//      }
//      })();
//  });
//  
//  // delete
//  app.delete('/api/delete/:item_id', (req, res) => {
//  (async () => {
//      try {
//          const document = db.collection('items').doc(req.params.item_id);
//          await document.delete();
//          return res.status(200).send();
//      } catch (error) {
//          console.log(error);
//          return res.status(500).send(error);
//      }
//      })();
//  });
//