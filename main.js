const bucketListContainer = document.querySelector('#bucketList-Container')
const form = document.querySelector('form')

const baseURL = 'http://localhost:4000/api/bucketlist'

const bucketListCallback = ({data: bucketList}) => displaybucketList(bucketList)
const errCallback = err => console.log(err)

const getBucketList = () => axios.get(baseURL).then(bucketListCallback).catch(errCallback)
const createBucketList = body => axios.post(baseURL, body).then(bucketListCallback).catch(errCallback)
const deleteBucketList = id => axios.delete(`${baseURL}/${id}`).then(bucketListCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let location = document.querySelector('#location')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('img')

    let bodyObj = {
        location: location.value,
        price: price.value,
        imageURL: imageURL.value
    }
    createBucketList(bodyObj)

    location.value = ''
    price.value = ''
    imageURL.value = ''
}

function createBucketListCard(bucketList) {
    const bucketListCard = document.createElement('div')
    bucketListCard.classList.add('bucketList-card')

    bucketListCard.innerHTML = `<img alt='bucket list cover image' scr=${bucketList.imageURL}class="bucket-list-cover-image"/>
    <p class="address">${bucketList.location}</p>
    <button onclick="deleteBucketList(${bucketList.id})">delete</button>`

    bucketListContainer.appendChild(bucketListCard)
}

function displaybucketList(arr) {
    bucketListContainer.innerHTML = ``
    for (let i =0; i < arr.length; i++) {
        createBucketListCard(arr[i])
    }
}

form.addEventListener('sumbit', submitHandler)

getBucketList()