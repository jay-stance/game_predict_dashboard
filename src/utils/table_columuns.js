export const formatDate = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
};

export const users_Table_Column = [{
        name: "Username",
        selector: (row) => row.username,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "Email",
        selector: (row) => row.email,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "VIP",
        selector: (row) => row.isVIP,
        reorder: true,
        sortable: true,
        cell: (row) => ( <
            div className = "name_image" > {
                row.status ? ( <
                    i className = "fa fa-check-circle text-green-500" / >
                ) : ( <
                    i className = "fa fa-times-circle text-red-500" / >
                )
            } <
            /div>
        ),
    },
];

export const match_Table_Column = [{
        name: "Home",
        selector: (row) => row.homeTeam,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "Home Score",
        selector: (row) => row.homeScore,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "Away",
        selector: (row) => row.awayTeam,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "Away Score",
        selector: (row) => row.awayScore,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "Time",
        selector: (row) => row.matchTime,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "Date",
        selector: (row) => row.matchDate,
        reorder: true,
        sortable: true,
        wrap: true,
    },
    {
        name: "VIP",
        selector: (row) => row.isvip,
        reorder: true,
        sortable: true,
        cell: (row) => ( <
            div className = "name_image" > {
                row.isvip ? ( <
                    i className = "fa fa-check-circle text-green-500" / >
                ) : ( <
                    i className = "fa fa-times-circle text-red-500" / >
                )
            } <
            /div>
        ),
    },

];