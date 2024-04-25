package com.example.billetkjop;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class repository {
    @Autowired
    private JdbcTemplate db;

    public void Saveticket(ticketSave ticket){
        String sql = "INSERT INTO ticket(movie, amount,firstName,lastName,phone,email) VALUES(?,?,?,?,?,?)";
        db.update(sql, ticket.getMovie(), ticket.getAmount(), ticket.getFirstName(), ticket.getLastName(), ticket.getPhone(), ticket.getEmail());
    }
    public List<ticketSave> getTicket(){
    String sql = "SELECT * FROM ticket ORDER BY lastName DESC";
    return db.query(sql, new BeanPropertyRowMapper<>(ticketSave.class));
    }
    public void deleteTicket(){
        String sql= "DELETE FROM ticket";
        db.update(sql);
    }
}
