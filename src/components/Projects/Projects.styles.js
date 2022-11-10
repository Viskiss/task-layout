import styled from "styled-components";

export default styled.section`

@media (max-width: 1279px) {
display: flex;
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-content: flex-start;
  padding: 28px 0 28px 0;

  .projects__image {
    width: 50%;
    height: max-content;
    object-fit: cover;
    position: relative;
    backdrop-filter: blur(0px);
  background-color: rgba(114,78,136,0.6);
 
  }

  .projects__image:hover {
    mask: url(/images/projects/viev.png) no-repeat ;
   mask-position: center;
  }
}

@media (min-width: 1280px) {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-content: flex-start;
  padding: 28px 0 28px 0;

  .projects__image {
    width: 25%;
    height: max-content;
    object-fit: cover;
    position: relative;
    backdrop-filter: blur(0px);
  background-color: rgba(114,78,136,0.6);
 
  }

  .projects__image:hover {
    mask: url(/images/projects/viev.png) no-repeat ;
   mask-position: center;
  }
}
  
`
