import React, { useState } from 'react';
import postsData from './posts.json';
import { Header, Footer, Card, Button, Form } from './Components';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'HTML', 'CSS', 'React'];

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header title="React Components & Mini Blog UI" />
      
      <main style={{ padding: '1rem' }}>
        <h2>Assignment Task 2: Reusable Components Practice</h2>
        <Card title="Sample Card Component" content="This card is dynamically rendered with props." tag="React Demo" />
        <Form onSubmit={(val) => alert('Form submitted: ' + val)} />

        <hr style={{ margin: '2rem 0' }} />

        <h2>Mini Project: React Blog UI</h2>
        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '0.5rem', flex: 1 }}
          />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ padding: '0.5rem' }}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Blog Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card 
                key={post.id}
                title={post.title}
                content={post.content}
                tag={post.category}
              />
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </main>

      <Footer year="2026" />
    </div>
  );
}
