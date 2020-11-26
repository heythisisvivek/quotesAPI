const expressObj = require("express");
const express = expressObj();
const mongo = require("mongoose");
const quotesSchema = require("./quotesSchema");
require("./database");

require("dotenv").config();
express.use(expressObj.json());
const PORT = process.env.PORT || 3000;

// Get All Quotes
express.get("/", async (req, res) => {
    try {
        const result = await quotesSchema.find();
        res.status(201).send(result);
    } catch(e) {
        res.status(400).send(e);
    }
})

// Get Specific Quote
express.get("/:id", async (req, res) => {
    try {
        const result = await quotesSchema.findById(req.params.id);
        res.status(201).send(result);
    } catch(e) {
        res.status(400).send(e);
    }
})

// Create Quotes
express.post("/", async (req, res) => {
    try {
        const createQuotes = quotesSchema(req.body);
        const result = await createQuotes.save();
        res.status(201).send(result);
    } catch(e) {
        res.status(400).send(e);
    }
})

// Update Specific Quote
express.patch("/:id", async (req, res) => {
    try {
        const result = await quotesSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(201).send(result);
    } catch(e) {
        res.status(500).send(e);
    }
})

// Delete Specific Quote
express.delete("/:id", async (req, res) => {
    try {
        const result = await quotesSchema.findByIdAndDelete(req.params.id);
        res.status(201).send(result);
    } catch(e) {
        res.status(500).send(e);
    }
})

// Run Server
express.listen(PORT, (req, res) => { console.log(`Server is running at ${PORT}`) });