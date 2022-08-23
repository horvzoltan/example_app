export interface Brewery {
  id:string,
  name: string,
  brewery_type: string,
  street: string,
  address_2: string | null,
  address_3: string | null,
  city: string,
  state: string,
  country_providence: string | null,
  postal_code: string,
  country: string,
  longitude: string,
  latitude: string,
  phone: string,
  website_url: string | null,
  updated_at: string,
  created_at: string,
}
