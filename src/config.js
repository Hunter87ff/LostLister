// import mongoose from "mongoose";
// mongoose.connect(process.env.REACT_APP_MONGO_URI)

export const items_data_model = [
    {
        id: 7823547234,
        created_at: new Date(), // Assuming datetime.datetime.now() translates to a Date object
        title: "Lost Pendrive",
        details: "32gb pendrive, red color",
        resolved: true,
        owner: "bwubca23654",
        founded_by: "bwubca22245",
        founded_at: "UB6 314, insdide the desk of last bench",
        reports: 0,
        image_url: "https://img.freepik.com/premium-photo/crimson-flash-drive-isolated-clean-white-background-clear-png-white-background_94628-93417.jpg?semt=ais_hybrid",
    },
    {
        id: 7823547235,
        created_at: new Date(), // Assuming datetime.datetime.now() translates to a Date object
        title: "Dell inspiron 15 Laptop",
        details: "Dell inspiron 15, black color, smiderman sticker on back side",
        resolved: false,
        owner: "bwubca23654",
        founded_by: "bwubca22245",
        founded_at: "UB6 401, under the table of first row, last machine",
        reports: 0,
        image_url: "static/img/banner/laptop.svg",
    },
    {
        id: 7823547236,
        created_at: new Date(), // Assuming datetime.datetime.now() translates to a Date object
        title: "Oneplus 9 pro",
        details: "Oneplus 9 pro, blue color, transparent back cover",
        resolved: false,
        owner: "bwubca23654",
        founded_by: "bwubca22245",
        founded_at: "UB6 314, insdide the desk of last bench",
        reports: 0,
        image_url: "static/img/banner/smart_phone.jpg",
    },
    {
        id: 7823547237,
        created_at: new Date(), // Assuming datetime.datetime.now() translates to a Date object
        title: "Smart Watch Titan",
        details: "Titan Smart watch , green color",
        resolved: true,
        owner: "bwubca23654",
        founded_by: "bwubca22245",
        founded_at: "UB6 314, insdide the desk of last bench",
        reports: 0,
        image_url: "static/img/banner/smart_watch.jpg",
    }
];
