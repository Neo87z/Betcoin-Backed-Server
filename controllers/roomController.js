const express = require('express');
const router = express.Router();
var _ = require("underscore");
const bcrypt = require('bcrypt');
let Room = require('../models/room')
let User = require('../models/messageData')
let Bet = require('../models/betdata');
const { forEach } = require('underscore');
module.exports = function () {

    //Imlashi
    router.post('/add_bet', function (req, res) {
        let RoomData = new Bet(req.body);
        RoomData.save()
            .then(Room => {
                var data = {
                    Status: "Sucess",
                    Message: "Room Created Sucessfully"
                }
                res.status(201).send(data);
            }).catch(err => {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            });

    })


    //Imalshi
    router.get('/TestData', function (req, res) {
        User.find(function (err, data) {
            if (!err) {
                console.l
                res.status(200).send(data);

            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })

    router.get('/getBEts', function (req, res) {
        Bet.find(function (err, data) {
            if (!err) {
                console.l
                res.status(200).send(data);

            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })



    router.post('/addnewBet', function (req, res) {
        let RoomData = new Bet(req.body);
        var Bet1 = false;
        var Bet2 = false;
        var Bet3 = false;
        var Bet4 = false;
        Bet.find(function (err, data) {
            if (!err) {
                console.log((data[0]))

                data.forEach(element => {
                    if (element.BetID == '1') {
                        Bet1 = true;
                    }
                    if (element.BetID == '2') {
                        Bet2 = true;
                    }
                    if (element.BetID == '3') {
                        Bet3 = true;
                    }
                    if (element.BetID == '4') {
                        Bet4 = true;
                    }
                })

                if (Bet1 != true) {
                    RoomData.BetID = '1'
                    RoomData.save()
                        .then(Room => {
                            var data = {
                                Status: "Sucess",
                                Message: "Room Created Sucessfully"
                            }
                            res.status(201).send(data);
                        }).catch(err => {
                            var data = {
                                Status: "Fail",
                                Message: "Unexpected Error PLease Contact System Admin"
                            }
                            res.status(200).send(data);
                        });

                } else {
                    if (Bet2 != true) {
                        RoomData.BetID = '2'
                        RoomData.save()
                            .then(Room => {
                                var data = {
                                    Status: "Sucess",
                                    Message: "Room Created Sucessfully"
                                }
                                res.status(201).send(data);
                            }).catch(err => {
                                var data = {
                                    Status: "Fail",
                                    Message: "Unexpected Error PLease Contact System Admin"
                                }
                                res.status(200).send(data);
                            });
                    } else {
                        if (Bet3 != true) {
                            RoomData.BetID = '3'
                            RoomData.save()
                                .then(Room => {
                                    var data = {
                                        Status: "Sucess",
                                        Message: "Room Created Sucessfully"
                                    }
                                    res.status(201).send(data);
                                }).catch(err => {
                                    var data = {
                                        Status: "Fail",
                                        Message: "Unexpected Error PLease Contact System Admin"
                                    }
                                    res.status(200).send(data);
                                });

                        } else {
                            if (Bet4 != true) {
                                RoomData.BetID = '4'
                                RoomData.save()
                                    .then(Room => {
                                        var data = {
                                            Status: "Sucess",
                                            Message: "Room Created Sucessfully"
                                        }
                                        res.status(201).send(data);
                                    }).catch(err => {
                                        var data = {
                                            Status: "Fail",
                                            Message: "Unexpected Error PLease Contact System Admin"
                                        }
                                        res.status(200).send(data);
                                    });
                            } else {
                                res.status(200).send('Fail');
                            }
                        }
                    }
                }


            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })



    //Imalshi
    //Imalshi

    router.post('/getBetByID', function (req, res) {
        console.log(req.body)
        Bet.find(function (err, dataX) {

            if (!err) {
                console.log(dataX)
                var filtered = _.where(dataX, { BetID: req.body.id });

                dataX.forEach(element => {
                  if(element.BetID == req.body.id){
                    res.status(200).send(element);
                  }
                })
                console.log("HU", filtered)
                var data = {
                    Status: "Sucess",
                    Message: "Retrived All Room Data",
                    data: filtered
                }
                
            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })




    //Imlashi



    router.post('/updateBet', function (req, res) {
        console.log(req.body)
        try {
            Bet.updateOne({ _id: req.body.id }, {
                BetName: req.body.BetName, ImageURL: req.body.ImageURL, Team1: req.body.Team1, Team2: req.body.Team2, BetID: req.body.BetID, Team1Logo: req.body.Team1Logo, Team2Logo: req.body.Team2Logo, Team1Score: req.body.Team1Score, Team2Score: req.body.Team2Score
            }, function (err, docs) {
                if (!err) {
                    var data = {
                        Status: "Sucess",
                        Message: "User Data Updated"
                    }
                    res.status(200).send(data);
                } else {
                    var data = {
                        Status: "Fail",
                        Message: "Unexpected Error PLease Contact System Admin"
                    }
                    res.status(200).send(data);
                }
            })
        } catch {
            var data = {
                Status: "Fail",
                Message: "Unexpected Error PLease Contact System Admin"
            }
            res.status(200).send(data);

        }
    })

    router.post('/deleteBEt', function (req, res) {
        try {
            Bet.deleteOne({ _id: req.body.id }, function (err, docs) {
                if (!err) {
                    var data = {
                        Status: "Sucess",
                        Message: "User Data Updated"
                    }
                    res.status(200).send(data);
                } else {
                    var data = {
                        Status: "Fail",
                        Message: "Unexpected Error PLease Contact System Admin"
                    }
                    res.status(200).send(data);
                }
            })
        } catch {
            var data = {
                Status: "Fail",
                Message: "Unexpected Error PLease Contact System Admin"
            }
            res.status(200).send(data);

        }
    })





    return router;
}