const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    id: {
        type: Number,
        required: true
    }, 
    usuario: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    }
});

//Password encryptation
UsuarioSchema.pre( "save", async function( next )
{
	const hash = await bcrypt.hash( this.contrasenia, 10 );
	this.contrasenia = hash;
	next();	
});

//Password verification (encrypted)
UsuarioSchema.methods.isValidPassword = async function( password )
{
	const user = this;
	const compare = await bcrypt.compare( password, user.contrasenia );
	return compare;
};

const Usuario = mongoose.model( "user", UsuarioSchema );

module.exports = Usuario;