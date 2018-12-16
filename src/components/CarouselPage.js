import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img className="d-block w-100 h-auto" src="https://previews.dropbox.com/p/thumb/AATIOQqhu8V0wsXYCbEwvLme5WeiNzjrRW2wc4HsixB0HEtu8hi-ghCoWgU03lGHNtL74lKLjrDzqoX1IB4zzYrbeYwPsYaa47cgcn2T7IwKxkw1XKTJ6DYqHeknhFG3qTutdShb-ZumfnBNIJ0QBpCGPtyXm5jd1TzshmKsWxPGLpifTTrOhscuZobOADjakvCwyVn9W4C_qgAqqCuCoLIbYe-XFWDu_labvIdFW5ImOQ/p.jpeg?size=2048x1536&size_mode=3" alt="First slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="d-block w-100" src="https://previews.dropbox.com/p/thumb/AAQ22_fk6WupDqWrpdkUjYXanjssv25No1TB9u2lvIGNXygIolXW94bnpnjvGfWkNf9CPlHoxMXQT9IUA0Q0nLGC2RBjLh_dNHhZZxdUyVQc3d7CGje6qd-GGpAnp8UlcC9vHKvDTvKbrLGxoOB2UpGLOnVAlDm-bpqiUNJgKsBvXZo68JRNDBtsgs5gZY35Gah_OZMw6p_ODwx7eDm6UROn-dbA7X-G6tKKSN0e3cNX8HCrASaXEqQWYYH1luljnaEMePklSLw-0gaVliXUUWT9o4gQL1LiXSGfNpsAe_SqLw/p.jpeg?size=2048x1536&size_mode=3" alt="Second slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="d-block w-100" src="https://previews.dropbox.com/p/thumb/AAT5OZ7nUcGrc7EYodKkEKSNEfjXt-iaaSju3x-lmmuaO_FHPsY4iSt5_yESIyEjRchk4J-lcr1bA8EPlwhdCuBX6QUj48-xr-_6EdjoZjAEC50qGcrEkGyN1wyqPycdrYn1wHERroRj4g35ADh6FBKlxOgIo31c3q4ICLkEL9ZgZZdiGAHzs77XLylMDopOP9p6WOZNkS-kO9V-Pv7AJ4s6kQbmM_x_vro50Ec-xjyzYUq34CX63H8Tbo3mRFU4it099CwAhu6XlQPCph02yWwMHeWvc38U3sCQRA-4xCFtqA/p.jpeg?size=2048x1536&size_mode=3" alt="Third slide" />
              <Mask overlay="black-slight" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Slight mask</h3>
              <p>Third text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img className="d-block w-100" src="https://previews.dropbox.com/p/thumb/AAQ_dgtRNBKa-EZsvOvsH4tTSIfPaiY9IO-QOcrP_VITN-miEBq_LvJtdxPZCDa7V4VSFEePJ57Nwo2-yYKfVH1AB1qISl_ume-Ps_5Fob3_eofiFbMloXs7wy31AZY8lRqt0zBYj-Ga1Yf0sNh9AyR_Qe-0JxDIzi8RWyBPR98jsZGIikzCcMbeVNnkxvaJAvRDjrgOh9Vku_NUE0uFH6wcjLnZozzvfsynlVipjc_bzLSfqaiCvbhonmpNTgAIjo4VxexuBwUnvSFwnYlKqxzocDg2Dr2U2raq3ASnuOGu1A/p.jpeg?size=2048x1536&size_mode=3" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="5">
            <View>
              <img className="d-block w-100" src="https://previews.dropbox.com/p/thumb/AAQvxWhDdoEUhs4NYwWeY4MQC3P8-aexuM-wU8LeFF18n-7VH38H5vZ596Q5b9B8TMntOmFcoo5B9iaOlrxvIi1thHdLPADePovGJwkd68DYnVNi2czA3DUdqWbaTBLE3UhMveWbxX5UmuyiHxmEVTDF9xZM4623Owufl2Kr0pRIXY108RdRb_w7JpT2N36yT413FwrhqQyhhJ6OmlvnWb09b8__60K_9vgtp04SECGjvcQzfofxEMnIHyCfT61sP39A4RE0IBKBGkPdCh2tCC0zRMjI-MXHl4NwyM7PdoGSvA/p.jpeg?size=2048x1536&size_mode=3" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="6">
            <View>
              <img className="d-block w-100" src="https://previews.dropbox.com/p/thumb/AAQ6gBHy4yhDSUGtb8PmOrHr8V-k0JcXWfUYElccSE3VfFYcBLfuUrqHb1Kaa3SPO8kNc0BF7TpXqm3wCJOi5Ly2ohFXYyVKCUW59_8v7KNPsxdJeF_QbjjeJZQD93D5MWoa9SqYpmC4il0sIj8034AMalpuc7i9VuR2IN0yngbLw34NNBgqCWw-x3weht0rHCBdRDfkCztfF_QQNOTCTY10hB1BKRF1PjsNDBSi9pUlgQ/p.jpeg?size=2048x1536&size_mode=3" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;