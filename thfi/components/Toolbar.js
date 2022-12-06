import {useRouter} from 'next/router';
import Image from 'next/image';

export const Toolbar = () => {
    const router = useRouter();

    return (
<nav class="navbar sticky-top  navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid ">
    <a class="navbar-brand"  href="#"> <Image src="/chip1.gif" alt="chip" width="40" height="40"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/hero">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/stocksearch">Market Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/news" aria-disabled="true">News</a>
        </li>
       
         
      </ul>
   
      <div class="text-end">
          <button type="button" href="/login" class="btn btn-outline-light me-2"><a href="/login"> Login</a></button>
          <button type="button" href="/signup" class="btn btn-primary"><a class="btn btn-primary" href="/signup"> Sign-up</a></button>
        </div>
    </div>
  </div>
</nav>
    )
}