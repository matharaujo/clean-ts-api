import express from 'express';
import Server from './config/server';

try {
    new Server(express(), 8000);
} catch (error) {
    console.log(error);
}
