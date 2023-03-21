import {fetchImages} from './fetchImages';
import Axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('button');

const galleryEl = document.querySelector('.gallery');
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');

const btnLoadMore = document.querySelector('.load-more');