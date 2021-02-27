const usernameToPassword = {
    f: 'f',
};

const usernameToPortfolio = {
    f: {
        cash: 42069.00,
        symbolToShareState: {
            TSLA: {
                quantity: 100,
                costBasis: 200,
            },
            MSFT: {
                quantity: 200,
                costBasis: 150,
            },
        }
    },
};

class Database {
    static login(username, password) {
        const validPassword = usernameToPassword[username];

        return password === validPassword;
    }

    static addUser(username, password) {
        if (usernameToPassword[username]) {
            return 'username already used';
        }

        usernameToPassword[username] = password;
        return '';
    }

    static getPortfolio(username) {
        const portfolio = usernameToPortfolio[username];
        return portfolio;
    }
}

module.exports = Database;