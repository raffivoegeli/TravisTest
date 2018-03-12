package com.example.raffi.apostarexample;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

import org.w3c.dom.Text;

/**
 * Created by Raffi on 08.03.2018.
 */

public class GameViewHolder extends RecyclerView.ViewHolder{
    public View parent;
    public TextView homeTeam;
    public EditText betHomeGoal;
    public TextView awayTeam;
    public EditText betAwayGoal;

    public GameViewHolder(View parent, TextView homeTeam, EditText betHomeGoal, TextView awayTeam, EditText betAwayGoal) {
        super(parent);
        this.parent = parent;
        this.homeTeam = homeTeam;
        this.betHomeGoal = betHomeGoal;
        this.awayTeam = awayTeam;
        this.betAwayGoal = betAwayGoal;
    }
}
