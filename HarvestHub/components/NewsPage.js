import React, { useEffect, useState } from 'react';
import { View, Text, Linking, ScrollView, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import newsStyles from '../css/news';

const News = () => {
    const [news, setNews] = useState([]);

    const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://192.168.209.243:3000/');
                const modifiedNews = response.data.map(item => ({
                    ...item,
                    name: item.name.split('Updated')[0].trim()
                }));
                setNews(modifiedNews);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
        const interval = setInterval(fetchNews, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={newsStyles.container}>
            <Text style={newsStyles.title}>News</Text>
            <ScrollView>
                {news.map((item, index) => (
                    <TouchableOpacity onPress={() => openLink(item.link)} key={index}>
                        <View style={newsStyles.card}>
                            <Image
                                source={{ uri: item.img }}
                                style={newsStyles.thumbnail}
                            />
                            <View style={newsStyles.content}>
                                <Text style={newsStyles.cardText}>{item.name}</Text>
                                <Text style={newsStyles.dateText}>{item.date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default News;
