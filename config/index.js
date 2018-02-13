exports.config = {
	env: process.env.NODE_ENV,
	port: process.env.PORT || 3000,
	host: process.env.HOST || 'localhost',
	ip: process.env.IP || '0.0.0.0',
	statics: './public/dist',
	db: {
		name: 'wedding-in',
		collections: {
			user: 'user',
			projects: 'rejects',
		},
	},
	get _dbProd() {
		return `mongodb://dev:dev@ds149132.mlab.com:49132/alkol_db`;
	},
	get _dbDev() {
		return `mongodb://${this.host}/${this.db.name}`;
	},
	get _db() {
		return this.env === 'development'
			? this._dbDev
			: this._dbProd;
	},
};
