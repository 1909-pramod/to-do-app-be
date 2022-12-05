export enum BxGyType {
  one = 1,
  two = 2,
  three = 3,
  four = 4
}

const SHOP_CURRENCY = '$'

export interface Aggregation {
  aggs: {
    stringFacets: any,
    numberFacets: any
  }
}

export interface Facet {
  facetName: string,
  facetValue: string
}

export enum SortKey {
  BestSelling = 'bestSelling',
  Score = '_score',
  Price = 'price',
  Saving = 'saving',
  Rating = 'rating',
  NumberOfReview = 'numberOfReview',
  PublishedAt = 'publishedAt'
}

export enum SortOrder {
  Desc = 'desc',
  Asc = 'asc'
}

export type sortTypeValues = 'bestSelling' | 'relevance' | 'priceHighToLow' | 'priceLowToHigh'
  | 'mostSavings' | 'ratings' | 'mostReviews' | 'newest';
export const SortType: { [i in sortTypeValues]: SortParam } = {
  bestSelling: {
    key: SortKey.BestSelling,
    value: SortOrder.Desc,
    displayText: 'Best Selling'
  },
  relevance: {
    key: SortKey.Score,
    value: SortOrder.Desc,
    displayText: 'Relevance'
  },
  priceLowToHigh: {
    key: SortKey.Price,
    value: SortOrder.Asc,
    displayText: 'Price, low to high'
  },
  priceHighToLow: {
    key: SortKey.Price,
    value: SortOrder.Desc,
    displayText: 'Price, high to low'
  },
  mostSavings: {
    key: SortKey.Saving,
    value: SortOrder.Desc,
    displayText: 'Most Savings'
  },
  ratings: {
    key: SortKey.Rating,
    value: SortOrder.Desc,
    displayText: 'Ratings'
  },
  mostReviews: {
    key: SortKey.NumberOfReview,
    value: SortOrder.Desc,
    displayText: 'Most Reviews'
  },
  newest: {
    key: SortKey.PublishedAt,
    value: SortOrder.Desc,
    displayText: 'Latest'
  }
}



export interface SortParam {
  key?: string,
  value?: 'desc' | 'asc',
  displayText?: string
  collectionSort?: {
    key: string,
    value: 'desc' | 'asc',
  }
}

export interface SortQuery {
  [index: string]: {
    order: string,
    unmapped_type?: 'long',
  }
}


export interface EsProductSearchParam {
  searchTerm?: string,
  categories?: string[],
  facets?: Facet[],
  page?: number,
  itemsPerPage?: number,
  sort?: SortParam,
  includeAggregation?: boolean,
  spellingSuggestion?: boolean,
  aggFacetExcludes?: string[],
  aggFacetIncludes?: string[],
  enableHighlight?: boolean,
  excludeSampleProducts?: boolean,
  useFunctionScore?: boolean,
  excludeOos?: boolean,
  excludeFields?: string[],
  includeFields?: string[],
  productType?: 'product' | 'productSample'
}

interface BoolFacet {
  facetName: string,
  facetValue: boolean
}

interface NumberFacet {
  facetName: string,
  facetValue: number
}

interface Variant {
  id: string
  title?: string
  availableForSale?: boolean
  sku: string
  price?: string
  compareAtPrice?: string
}


export interface Product {
  id: string
  title: string
  imageUrl: string
  vendor: string
  descriptionHtml: string
  description: string
  handle: string,
  firstVariant: Variant
  variants: Variant[]
  cursor: string,
  publishedAt: string
  status: string
  price: string
  compareAtPrice: string
  tags: [string]
  judgeme: string
  hasMultipleVariant: boolean
  totalVariants: number
  rating?: number
  numberOfReview?: number
  productType?: string,
  collections?: string[]
  isOos: boolean
}

export interface Collection {
  id: string
  title?: string
  handle: string,
  cursor?: string,
  imageUrl?: string
  sortOrder?: string
  templateSuffix: string
  descriptionHtml?: string
}

export interface CollectionSuggestion {
  id: string,
  title: string,
  searchUrl: string,
  imageUrl: string,
  type?: string,
  collectionHandle: string
}

export interface EsProductSource {
  id: string
  boolFacets: BoolFacet[],
  categoryDirectParents: string[],
  numberFacets: NumberFacet[],
  numberSort: {
    [index: string]: number
  },
  searchResultData: Product,
  skus: string[],
  stringFacets: Facet[],
  title: string,
  type: string
}

export interface ProductHit {
  _id: string,
  _index: string,
  _score: number,
  _source: EsProductSource,
  highlight: {
    title: string[]
  }
}

export interface Bucket {
  doc_count: number
  key: string
  facetValue?: {
    buckets: Bucket[]
  }
}

export interface EsAggregations {
  numberFacets: any,
  stringFacets: {
    facetName: {
      buckets: Bucket[]
    }
  }
}
export interface ProductSearchResult {
  hits: {
    hits: ProductHit[],
    total: {
      value: number
    }
  },

  aggregations: EsAggregations
}

export interface EsCategoryInformation {
  ancestors: string[],
  categoryId: string,
  collectionHandle: string,
  displayName: string,
  filters: string[],
  parent: string,
  type: string,
  parentCategory?: EsCategoryInformation,
  children?: EsCategoryInformation[],
  imgUrl?: string
}

export interface CacheResponse<T> {
  data: T,
  expireAt: Date
}

export interface DiscountVariant {
  id: string
  title?: string
  sku: string
  price?: string
  compareAtPrice?: string
  imageUrl?: string
  handle?: string;
}
interface CachedProducts {
  [i: string]: Product[]
}
export enum PromotionType {
  bundle = 'bundle',
  freeGift = 'freeGift',
  bundleSameVariant = 'bundleSameVariant'
}
export interface Promotion {
  applyFor: string
  requiredQuantity?: number
  discountQuantity?: number // for Free Gift Type
  mixWithOtherVariants?: DiscountVariant[];
  type: PromotionType
  dealTag: string
  discountMessage: string
  discountVariants: DiscountVariant[]
}
const input = JSON.parse(`{
  "took": 1,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 1,
      "relation": "eq"
    },
    "max_score": 13.392054,
    "hits": [
      {
        "_index": "product_sg_prod_8_69_3",
        "_type": "_doc",
        "_id": "238424424473",
        "_score": 13.392054,
        "_source": {
          "skus": [
            "NUT-37890 // NUT3789",
            "NUT-37593 // NUT3759"
          ],
          "boolFacets": [
            {
              "facetName": "isOos",
              "facetValue": false
            }
          ],
          "searchResultData": {
            "cursor": "",
            "publishedAt": "2018-05-04T04:18:34Z",
            "numberOfReview": 62,
            "rating": 4.87,
            "handle": "nutripe-pure-duck-green-tripe-dog-390g",
            "totalVariants": 2,
            "variants": [
              {
                "availableForSale": true,
                "price": "1.90",
                "id": "gid://shopify/ProductVariant/21116791521364",
                "title": "95g",
                "sku": "NUT-37890 // NUT3789",
                "compareAtPrice": "2.60"
              },
              {
                "availableForSale": true,
                "price": "4.40",
                "id": "gid://shopify/ProductVariant/13878119071828",
                "title": "390g",
                "sku": "NUT-37593 // NUT3759",
                "compareAtPrice": "5.90"
              }
            ],
            "title": "Nutripe Pure Duck & Green Tripe Dog Wet Food (2 Sizes)",
            "tags": [
              "12-12-deals",
              "19-90-great-deals",
              "all",
              "all-life-stages",
              "april-e-expo-sale",
              "aug-2021",
              "bronco-&-nutripe-wet-food",
              "bundle-deal",
              "dog",
              "dog-food",
              "dog-grain-free",
              "dog-sale",
              "dog-sales",
              "dog-wet-food",
              "dog-wet-food-sale",
              "dog-wet-food-top-2021",
              "duck",
              "eat-superfood-fix",
              "exclusive-deals",
              "fb-shop",
              "food",
              "friday-bfcm-flash",
              "grain-free",
              "gss2022",
              "high-protein",
              "hip-and-joint-support",
              "ingredient-duck",
              "ingredient-tripe",
              "june-gss",
              "june-gss-all",
              "l2l-nov-deals",
              "label-1-12-small-cans-for-$19.90",
              "mnm~12~nutripe-small-can~1.90~19.90",
              "mnm~6~nutripe-pure-large-cans~4.40~26.40",
              "nutripe",
              "nutripe-l2l",
              "nutripe-pure-large-cans",
              "nutripe-small-can",
              "nutripe95g",
              "pate",
              "pet-expo-19",
              "product-upgrading",
              "sales",
              "taste-of-the-wild-dry-dog-food-bundle",
              "totw-free-nutripe",
              "tripe",
              "under-25",
              "wet-food",
              "wet-food-sale"
            ],
            "firstVariant": {
              "availableForSale": true,
              "price": "1.90",
              "id": "gid://shopify/ProductVariant/21116791521364",
              "title": "95g",
              "sku": "NUT-37890 // NUT3789",
              "compareAtPrice": "2.60"
            },
            "price": "1.90",
            "vendor": "Nutripe ",
            "imageUrl": "https://cdn.shopify.com/s/files/1/1149/5008/products/DUCK-95_170x.jpg?v=1645093674",
            "hasMultipleVariant": true,
            "id": "238424424473",
            "productType": "Dog Wet Food",
            "status": "ACTIVE",
            "compareAtPrice": "2.60"
          },
          "handle": "nutripe-pure-duck-green-tripe-dog-390g",
          "id": "238424424473",
          "title": "Nutripe Pure Duck & Green Tripe Dog Wet Food (2 Sizes)",
          "type": "product",
          "tags": [
            "12-12-deals",
            "19-90-great-deals",
            "all",
            "all-life-stages",
            "april-e-expo-sale",
            "aug-2021",
            "bronco-&-nutripe-wet-food",
            "bundle-deal",
            "dog",
            "dog-food",
            "dog-grain-free",
            "dog-sale",
            "dog-sales",
            "dog-wet-food",
            "dog-wet-food-sale",
            "dog-wet-food-top-2021",
            "duck",
            "eat-superfood-fix",
            "exclusive-deals",
            "fb-shop",
            "food",
            "friday-bfcm-flash",
            "grain-free",
            "gss2022",
            "high-protein",
            "hip-and-joint-support",
            "ingredient-duck",
            "ingredient-tripe",
            "june-gss",
            "june-gss-all",
            "l2l-nov-deals",
            "label-1-12-small-cans-for-$19.90",
            "mnm~12~nutripe-small-can~1.90~19.90",
            "mnm~6~nutripe-pure-large-cans~4.40~26.40",
            "nutripe",
            "nutripe-l2l",
            "nutripe-pure-large-cans",
            "nutripe-small-can",
            "nutripe95g",
            "pate",
            "pet-expo-19",
            "product-upgrading",
            "sales",
            "taste-of-the-wild-dry-dog-food-bundle",
            "totw-free-nutripe",
            "tripe",
            "under-25",
            "wet-food",
            "wet-food-sale"
          ]
        }
      }
    ]
  }
}`)

export interface SearchByProductField {
  handle?: string,
  tag?: string,
  productId?: string
  sku?: string
}

class BxGy {
  deagTag: string
  xQuantity: number
  xSku!: string
  xSkus!: string[]
  xTag!: string
  yQuantity: number
  yOldPrice!: number
  yNewPrice: number
  yTag!: string | undefined
  ySku!: string | undefined
  type: number | undefined

  constructor(tag: string) {
    this.deagTag = tag;
    const dealElements = tag.split("~");
    const dealLength = dealElements.length
    this.xQuantity = Number(dealElements[1])
    this.yQuantity = Number(dealElements[4])
    this.yNewPrice = Number(dealElements[dealLength - 1])
    if (dealElements.length == 9 && dealElements[2].includes("//") && !dealElements[2].includes("[")) { //Type 1
      this.xSku = dealElements[2]
      this.type = BxGyType.one
      this.yTag = dealElements[dealLength - 4]
      this.yOldPrice = Number(dealElements[dealLength - 3]);
    } else if (dealElements.length == 9 && (!dealElements[2].includes("//") || dealElements[2].includes('['))) {//Type 4
      this.xTag = dealElements[2].split('[')[0];
      this.type = BxGyType.four
      if (dealElements[2].includes('[')) {
        this.xSkus = dealElements[2].split('[')[dealLength - 1]?.slice(0, -2).split('+') || [];
      } else {
        this.xSkus = [];
      }
      this.yTag = dealElements[dealLength - 4]
      this.yOldPrice = Number(dealElements[dealLength - 3])
    } else {
      this.xSku = dealElements[2]
      if (dealElements[dealLength - 3]?.includes("//")) {
        this.type = BxGyType.three;
        this.ySku = dealElements[dealLength - 3];
      } else {
        this.type = BxGyType.two;
        this.yTag = dealElements[dealLength - 3];
      }
    }
  }

  getApplicableVariant() {
    return this.xTag ? 'all' : this.xSku
  }

  private replaceHyphen(text: string) {
    if (!text) {
      return ''
    }
    return text.replace(/-/g, ' ');
  }

  getDiscountMessage(product: Product) {
    const applyFor = this.getApplicableVariant();
    if (!applyFor) {
      return '';
    }
    let discountMessage: string;
    if (applyFor === 'all') {
      discountMessage = `Buy ${this.replaceHyphen(this.xTag)} for ${this.yQuantity} FREE GIFTS`
      if (this.yNewPrice > 0) {
        discountMessage = `Buy ${this.replaceHyphen(this.xTag)} for ${this.yQuantity} GIFTS at ${SHOP_CURRENCY}${this.yNewPrice}`
      }
    } else {
      const specificVariant = product.variants.find((v) => v.sku === this.xSku);
      const title = specificVariant?.title;
      discountMessage = `Buy ${this.xQuantity} item(s) of ${title} for ${this.yQuantity} FREE GIFTS`
      if (this.yNewPrice > 0) {
        discountMessage = `Buy ${this.xQuantity} item(s) of ${title} for ${this.yQuantity} GIFTS at ${SHOP_CURRENCY}${this.yNewPrice}`;
      }
    }
    return discountMessage
  }
}

async function getPromotionProductsByTag(tag: string, cachedProducts: CachedProducts) {
  const productSources = input
  console.log({ productSources: input.hits.hits[0] });
  const promotionProducts = productSources.hits.hits.map((s: any) => s._source.searchResultData);
  return promotionProducts;
}

async function getBxGyDiscountProducts(bxGyDeal: BxGy, cachedProducts: CachedProducts): Promise<Product[]> {
  let discountProducts: Product[] = [];
  if (bxGyDeal.yTag) {
    discountProducts = await getPromotionProductsByTag(bxGyDeal.yTag, cachedProducts);
  }
  return discountProducts;
}

function getDiscountVariants(products: Product[], yPrice: number | null) {
  let validVariants: DiscountVariant[] = [];
  console.log({ yPrice });
  products.forEach((p) => {
    p.variants.filter((v) => v.availableForSale).forEach((v) => {
      let fullTitle = p.title;
      if (v.title && v.title.toLowerCase() != 'default title') {
        fullTitle = `${fullTitle} ${v.title}`
      }
      const discountVariant = {
        id: v.id,
        title: fullTitle,
        price: v.price,
        compareAtPrice: v.compareAtPrice,
        sku: v.sku,
        imageUrl: p.imageUrl,
        handle: p.handle
      }
      if (yPrice && yPrice > 0) {
        if (Number(v.price) == yPrice) {
          validVariants.push(discountVariant)
        }
      } else {
        validVariants.push(discountVariant)
      }

    })
  })
  return validVariants;
}


const main = async () => {
  // # Type1: bxgy~[QUANTITY]~[SKU]~g~[QUANTITY]~[TAG]~[OLD_PRICE]~a~[PRICE] ex: bxgy~1~ab-ad-expo~g~1~ah-ad-dog-treat~9.90~a~0
  // bxgy1HEK-202113 // HEK-202113~g~1~[tag]~25.90~a~0
  const bxGyTag = 'bxgy~1~NUT-35032 // NUT3503~g~12~nutripe-small-can~1.90~a~0';
  const bxGyDeal = new BxGy('bxgy~1~NUT-35032 // NUT3503~g~12~nutripe-small-can~1.90~a~0')
  console.log({ bxGyDeal: JSON.stringify(bxGyDeal) });
  const discountMessage: string = ''
  let discountProducts: Product[] = await getBxGyDiscountProducts(bxGyDeal, {});
  console.log({ discountProducts: JSON.stringify(discountProducts) });

  let mixWithOtherVariants: DiscountVariant[] = [];
  let validVariants: DiscountVariant[] = getDiscountVariants(discountProducts, bxGyDeal.yOldPrice);
  console.log({ validVariants: JSON.stringify(validVariants) });
  if (!validVariants.length) {
    return null;
  }
  const promotion: Promotion = {
    type: PromotionType.freeGift,
    requiredQuantity: bxGyDeal.xQuantity,
    mixWithOtherVariants,
    discountQuantity: bxGyDeal.yQuantity,
    applyFor: bxGyDeal.getApplicableVariant(),
    dealTag: bxGyTag,
    discountVariants: validVariants,
    discountMessage,
  }
  return promotion
}

export default main;