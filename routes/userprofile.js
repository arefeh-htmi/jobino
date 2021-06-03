const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//loading validation after creating the userprofie valdiation
const validateProfileInput = require("../validation/profile");
const validateExperienceInput = require("../validation/experience");
//bring profile schema model

const Profile = require("../models/Profile");

//bringing user schema model
const User = require("../models/User");

//testing this api
router.get("/demo", (req, res) =>
    res.json({
        msg: "Profile Works"
    })
);
//get request
//now need to check for the user who is trying to login
router.get(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        //initializing this as empty because need to add error msg
        const errors = {};
        //fetch current user's profile and finding from profile model
        //findone is a mongoose method which will find a specifc{single} thing
        Profile.findOne({
            user: req.user.id
        })
            .populate("user", ["name"])
            .then(profile => {
                //if not found display error msg
                if (!profile) {
                    errors.noprofile = "no profile exists for this person";
                    return res.status(404).json(errors);
                }
                //if found then show proifle
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
);
//to see all profiles at api/userprofile/all
router.get("/all", (req, res) => {
    Profile.find()
        .populate("user", ["name"])
        .then(profiles => {
            if (!profiles) {
                errors.noprofile = "no profiles";
                return res.status(404).json(errors);
            }
            res.json(profiles);
        })
        .catch(err =>
            res.status(404).json({
                profile: "no profiles"
            })
        );
});
//getting profile by name
router.get("/profilename/:profilename", (req, res) => {
    const errors = {};

    Profile.findOne({
        profilename: req.params.profilename
    })
        .populate("user", ["name"])
        .then(profile => {
            if (!profile) {
                errors.noprofile = "There is no profile for this user";
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});
//getting profile by id
router.get("/users/:users_id", (req, res) => {
    Profile.findOne({
        user: req.params.user_id
    })
        .populate("user", ["name"])
        .then(profile => {
            if (!profile) {
                errors.noprofile = "there is no profile";
                res.status(400).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});
//post request
router.post(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const { errors, isValid } = validateProfileInput(req.body);

        //check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        //getting fields and adding in an obj
        const fields = {};
        fields.user = req.user.id;

        //checking if its sent from handle
        if (req.body.profilename) fields.profilename = req.body.profilename;
        if (req.body.company) fields.company = req.body.company;
        if (req.body.location) fields.location = req.body.location;

        //so splitting skills into an array when seperated by ','
        if (typeof req.body.skills !== "undefined")
            fields.skills = req.body.skills.split(",");

        //searching by id and if profile has then update

        Profile.findOne({
            user: req.user.id
        }).then(profile => {
            if (profile) {
                Profile.findOneAndUpdate(
                    {
                        user: req.user.id
                    },
                    {
                        $set: fields
                    },
                    {
                        new: true
                    }
                ).then(profile => res.json(profile));
            } else {
                //checking if there
                Profile.findOne({
                    profilename: fields.profilename
                }).then(profile => {
                    if (profile) {
                        errors.profilename = "profile already there";
                        res.status(400).json(errors);
                    }
                    //saving  and making new if not
                    new Profile(fields)
                        .save()
                        .then(profile => res.json(profile));
                });
            }
        });
    }
);

//post req to add exp
router.post(
    "/experience",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const { errors, isValid } = validateExperienceInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }
        //to add new experience
        Profile.findOne({
            user: req.user.id
        }).then(profile => {
            const newExperience = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                from: req.body.from,
                to: req.body.to,

                description: req.body.description
            };

            // Add to exp array
            profile.experience.unshift(newExperience);

            profile.save().then(profile => res.json(profile));
        });
    }
);

//after adding if user wants to delete the experience
router.delete(
    "/experience/:exp_id",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        Profile.findOne({
            user: req.user.id
        })
            .then(profile => {
                const remove = profile.experience
                    .map(item => item.id)
                    .indexof(req.params.exp_id);
                //splicing out of array at index 1
                profile.experience.splice(remove, 1);

                //saving
                profile.save().then(profile => res.json(profile));
            })
            .catch(err => res.status(404).json(err));
    }
);

module.exports = router;
