// src/app/api/user/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export async function GET() {
  if (!uri) {
    return NextResponse.json({ error: 'MONGODB_URI is not defined' }, { status: 500 });
  }


  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('Mess_Managment');
    const collection = db.collection('users');

    // Fetch data from MongoDB
    const data = await collection.find({}).toArray();

    return NextResponse.json({ message: 'Connected to MongoDB', data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await client.close();
  }
}