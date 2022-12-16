module.exports = function(router, database) {

  router.get('/properties', (req, res) => {
    database.getAllProperties(req.query, 20)
    .then(properties => res.send({properties}))
    .catch(e => {
      console.error(e);
      res.send(e)
    }); 
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    database.getAllReservations(userId)
    .then(reservations => res.send({reservations}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  router.post('/properties', (req, res) => {
    const userId = req.session.userId;
    database.addProperty({...req.body, owner_id: userId})
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });

  // add reservation code, not finished
  // router.get('/reserve', (req, res) => {
  //   const userId = req.session.userId;
  //   database.reservation({ ...req.body, owner_id: userId })
  //     .then(property => {
  //       res.send(reservation);
  //     })
  //     .catch(e => {
  //       console.error(e);
  //       res.send(e)
  //     });
  // });

  // add reservation code, not finished
  // router.post('/reserve', (req, res) => {
  //   const reserve = req.body;
  //   database.addReservation(reservation)
  //     .then(reservation => {
  //       if (!reservation) {
  //         res.send({ error: "error" });
  //         return;
  //       }
  //       req.session.userId = user.id;
  //       res.send("🤗");
  //     })
  //     .catch(e => res.send(e));
  // });
  

  return router;
}