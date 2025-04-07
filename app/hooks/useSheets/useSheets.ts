import fetchApiData from '@/services/fetchApiData';
import { Testimonial } from '@/types/TestimonialsTypes';
import  { useEffect, useState } from 'react'

export default function useSheets() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTestimonials = async () => {
            try {
                const response = await fetchApiData();
                setTestimonials(response.data);
            } catch (error) {
                console.error('Failed to fetch testimonials:', error);
            } finally {
                setLoading(false);
            }
        };
        getTestimonials();
    }, []);
    return {
        testimonials,
        setTestimonials,
        setLoading,
        loading,
    }
}
